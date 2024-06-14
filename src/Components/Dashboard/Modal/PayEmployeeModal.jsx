import PropTypes from "prop-types";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import { Fragment } from "react";
import { Button } from "@material-tailwind/react";

const PayEmployeeModal = ({ closeModal, isOpen, setIsOpen, payUser }) => {
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
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {/* Salary: $ {user?.user?.salary} */}
                    <label htmlFor="" className="text-xl text-white">
                      Salary
                    </label>
                    <p className="border-2 border-white mt-3 p-2 rounded-lg text-white">
                      $ {payUser?.payUser?.salary}
                    </p>
                  </p>
                </div>
                <div className="mt-2">
                  <div className="flex justify-between gap-2">
                    <input
                      className="border-2  border-white mt-3 pl-2 py-2 rounded-lg"
                      type="text"
                      placeholder="Month"
                      name=""
                      id=""
                    />
                    <input
                      className="border-2 w-[150px] border-white mt-3 pl-2 py-2 rounded-lg"
                      type="number"
                      placeholder="Year"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {/* Year: {user.user.name} */}
                  </p>
                </div>

                <hr className="mt-8 " />
                {/* checkout form */}

                <div className="flex mt-2 justify-center gap-5">
                  <Button
                    onClick={() => setIsOpen(false)}
                    color="indigo"
                    type="button"
                  >
                    Pay
                  </Button>

                  <Button
                    color="red"
                    type="button"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
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
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default PayEmployeeModal;
