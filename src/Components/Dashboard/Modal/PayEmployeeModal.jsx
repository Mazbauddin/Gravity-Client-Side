import PropTypes from "prop-types";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import { Fragment } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../Form/CheckoutForm";
import { useForm } from "react-hook-form";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const PayEmployeeModal = ({ closeModal, isOpen, setIsOpen, payUser }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-white"
                >
                  Employee Salary
                </DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mt-2 text-sm text-gray-500">
                    <label htmlFor="" className="text-xl text-white">
                      Salary
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="salary"
                        disabled
                        defaultValue={payUser?.salary}
                        className="border-2  border-black mt-3 pl-2 py-2 rounded-lg w-full bg-white"
                      />
                    </label>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between gap-2">
                      <div className="mt-2 text-sm text-gray-500">
                        <label htmlFor="" className="text-xl text-white">
                          Month
                        </label>
                        <label className="input-group">
                          <input
                            type="text"
                            {...register("month", { required: true })}
                            name="month"
                            className="border-2  border-black mt-3 pl-2 py-2 rounded-lg w-full bg-white"
                          />
                        </label>
                      </div>
                      <div className="mt-2 text-sm text-gray-500">
                        <label htmlFor="" className="text-xl text-white">
                          Year
                        </label>
                        <label className="input-group">
                          <input
                            type="number"
                            {...register("year", { required: true })}
                            name="year"
                            className="border-2  border-black mt-3 pl-2 py-2 rounded-lg w-full bg-white"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-8 " />
                  {/* stripe work */}
                  <Elements stripe={stripePromise}>
                    {/* checkout form */}
                    <CheckoutForm payUser={payUser} setIsOpen={setIsOpen} />
                  </Elements>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

PayEmployeeModal.propTypes = {
  payUser: PropTypes.object,
  closeModal: PropTypes.func,
  handleAddSalaryInfo: PropTypes.object,
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default PayEmployeeModal;
