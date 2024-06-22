import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import PropTypes from "prop-types";
import "./CheckoutForm.css";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { ImSpinner9 } from "react-icons/im";

const CheckoutForm = ({ setIsOpen, payUser }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState();
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    // fetch client secret
    if (payUser?.salary && payUser?.salary > 1) {
      getClientSecret({ salary: payUser?.salary });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payUser?.salary]);

  //   get clientSecret
  const getClientSecret = async (salary) => {
    const { data } = await axiosSecure.post(`/create-payment-intent`, salary);
    console.log("client secret from server", data);
    setClientSecret(data.clientSecret);
  };

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
      setProcessing(false);
      return;
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }

    // confirm payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log("[confirmError]", confirmError);
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      console.log(paymentIntent);
      const paymentInfo = {
        ...payUser,
        transactionId: paymentIntent.id,
        date: new Date(),
      };
      console.log(paymentInfo);
    }
    setProcessing(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <div className="flex mt-2 justify-center gap-5">
          <Button
            disabled={!stripe || !clientSecret || processing}
            // onClick={() => setIsOpen(false)}
            color="indigo"
            type="submit"
          >
            {processing ? (
              <ImSpinner9 className="animate-spin m-auto" size={24} />
            ) : (
              `Pay ${payUser?.salary}`
            )}
          </Button>

          <Button color="red" type="button" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
        </div>
      </form>
      {cardError && <span className="text-red-500">{cardError.message}</span>}
    </>
  );
};

CheckoutForm.propTypes = {
  payUser: PropTypes.object,
  setIsOpen: PropTypes.func,
  handleAddSalaryInfo: PropTypes.func,
};

export default CheckoutForm;
