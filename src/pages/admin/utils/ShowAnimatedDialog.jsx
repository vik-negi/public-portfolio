import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import create from "../../../utils/Theme";

export default function ShowAnimatedDialog({
  open = false,
  cancel,
  title,
  body,
  onSubmit,
  cross,
  width,
  showCancel = true,
  hideButton = true,
}) {
  const cancelButtonRef = useRef(null);
  const theme = create();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={cancel ?? cross}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`relative mx-auto transform bg-transparent overflow-hidden rounded-lg text-left transition-all sm:my-8 flex-col sm:mx-auto`}
              >
                <div className={` mx-auto  px-4 pb-4 pt-5 sm:p-6 sm:pb-4`}>
                  <div className="sm:items-start bg">
                    <div className="mt-3 flex justify-center text-center sm:ml-4 sm:mt-0 sm:text-left">
                      {title && (
                        <Dialog.Title
                          as="h2"
                          className="text-base font-semibold leading-6 text-gray-900 flex justify-between mb-5"
                        >
                          <div className="flex items-center gap-2 text-[16px]">
                            {title}
                          </div>
                          {cross && (
                            <FontAwesomeIcon
                              onClick={cross}
                              icon={faXmark}
                              className="h-12 w-12 :hover:text-red-500 cursor-pointer"
                              aria-hidden="true"
                            />
                          )}
                        </Dialog.Title>
                      )}
                      {body}
                    </div>
                  </div>
                  <div className={`  sm:flex sm:flex-row-reverse sm:px-6`}>
                    {onSubmit && (
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={onSubmit}
                      >
                        Submit
                      </button>
                    )}
                    {cancel && showCancel && (
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={cancel}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
