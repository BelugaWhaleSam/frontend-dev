"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
} from "@/components/animated-modal";
import { AnimatedTooltip } from "@/components/animated-tooltip";
import { motion } from "motion/react";

export function AnimatedModalDemo() {
  const people = [
    {
      id: 1,
      name: "Chaitanya SK",
      designation: "+1 (817) XXX-XXXX",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Aashna Ratnani",
      designation: "+1 (817) XXX-XXXX",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Abhishek Nagaraja",
      designation: "+1 (817) XXX-XXXX",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full">
      <Modal>
        <ModalTrigger className="w-full transform rounded-lg bg-white border border-gray-300 px-6 py-2.5 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Contact Us
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-black dark:text-white z-20">
            📧
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Get in touch with{" "}
              <span className="px-2 py-1 rounded-md bg-gradient-to-r from-orange-400 to-orange-500 text-white">
                MavsThink
              </span>
            </h4>

            {/* Replace images with AnimatedTooltip */}
            <div className="flex justify-center items-center mb-8">
              <AnimatedTooltip items={people} />
            </div>

            {/* Contact information with updated details */}
            <div className="space-y-6 text-neutral-700 dark:text-neutral-300">
              {/* Keep existing address and email sections */}
              <div className="flex items-start gap-3">
                <LocationIcon className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-medium mb-1">Address</h5>
                  <p className="text-sm">
                    University of Texas at Arlington
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <EmailIcon className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-medium mb-1">Contacts</h5>
                  <p className="text-sm">ec@uta.edu</p>
                  <p className="text-sm">+1 214-604-2001</p>
                </div>
              </div>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <ModalCloseButton />
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}

const ModalCloseButton = () => {
  const { setOpen } = useModal();

  return (
    <button
      onClick={() => setOpen(false)}
      className="w-full px-4 py-2 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm hover:bg-gray-300 dark:hover:bg-gray-900 transition-colors"
    >
      Close
    </button>
  );
};

const LocationIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const EmailIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const UserIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="8" r="5" />
    <path d="M20 21a8 8 0 1 0-16 0" />
  </svg>
);
