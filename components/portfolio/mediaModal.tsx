import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";

interface MediaModalProps {
  media: MediaItem;
  onClose: () => void;
}

const MediaModal: React.FC<MediaModalProps> = ({ media, onClose }) => {
  return (
    <Transition appear show as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-80" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg shadow-xl max-w-[90vw] max-h-[90vh] w-full">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Media Display */}
                  <div className="flex justify-center items-center bg-black rounded-t-lg md:rounded-l-lg md:rounded-t-none overflow-hidden">
                    {media.type === "image" ? (
                      <Image
                        src={media.src}
                        alt={media.title}
                        width={media.width}
                        height={media.height}
                        className="max-w-full max-h-[90vh] object-contain"
                      />
                    ) : (
                      <video
                        src={media.src}
                        controls
                        muted
                        autoPlay
                        playsInline
                        className="max-w-full max-h-[90vh] object-contain"
                      />
                    )}
                  </div>
                  <div className="p-6 flex flex-col justify-between bg-white w-full md:w-1/3">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-800">
                        {media.title}
                      </h3>
                      <p className="text-gray-600">{media.description}</p>
                    </div>
                    <button
                      className="mt-4 self-end px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      onClick={onClose}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MediaModal;
