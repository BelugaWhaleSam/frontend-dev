"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () =>
    setActive(null)
  );

  return (
    <>
      <div className="text-center mb-16 mt-10">
        <h2 className="text-2xl md:text-5xl font-bold text-slate-300 tracking-tight">
          Frequently Asked{" "}
          <span className="inline-block rounded-lg bg-gradient-to-r from-blue-400 to-blue-800 px-2 py-1 text-black font-bold">
            Questions
          </span>
        </h2>
        <p className="mt-4 text-slate-300/70 text-base md:text-lg">
          questions, feel free to reach out to our support team or explore the
          resources provided below.
        </p>
      </div>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-[40vh] md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50/5 dark:hover:bg-neutral-800/10 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-slate-300 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-slate-300/80 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "What is MavsThink?",
    description: "Learn about UTA's premier business hackathon",
    ctaText: "Learn More",
    ctaLink: "#about",
    content: () => (
      <p>
        UTA's flagship 2-day Business Hackathon fostering innovation:
        <br />
        <br />
        • Open to all majors and backgrounds
        <br />
        • Work with industry mentors
        <br />
        • Network with entrepreneurs
        <br />
        • Build real-world solutions
        <br />
        <br />
        30 Teams • 120 Participants • 2 Days • 1 Goal = INNOVATE
      </p>
    ),
  },
  {
    title: "Team Formation",
    description: "Learn about team size and requirements",
    ctaText: "Team Info",
    ctaLink: "#teams",
    content: () => (
      <p>
        Team Requirements:
        <br />
        <br />
        • 1-5 members per team
        <br />
        • Individual participants welcome
        <br />
        • Cross-disciplinary teams encouraged
        <br />
        • Team matching assistance available
        <br />
        <br />
        Not found a team yet? We'll help you connect!
      </p>
    ),
  },
  {
    title: "Registration Details",
    description: "Free registration, limited spots available",
    ctaText: "Register Now",
    ctaLink: "#register",
    content: () => (
      <p>
        Important Information:
        <br />
        <br />
        • Registration is completely free
        <br />
        • Applications close Aug 25, 2025
        <br />
        • Rolling acceptance notifications
        <br />
        • 4 days to confirm participation
        <br />
        <br />
        Under 18? Parental consent form required.
      </p>
    ),
  },
  {
    title: "Event Format",
    description: "Two-day intensive program",
    ctaText: "View Schedule",
    ctaLink: "#schedule",
    content: () => (
      <p>
        Comprehensive Schedule:
        <br />
        <br />
        Day 1 (9 AM – 7 PM):
        <br />
        • Opening & Team Formation
        <br />
        • Business Model Workshop
        <br />
        • Mentorship Sessions
        <br />
        <br />
        Day 2 (10 AM – 3 PM):
        <br />
        • Final Presentations
        <br />
        • Networking Events
        <br />• Awards Ceremony
      </p>
    ),
  },
  {
    title: "Have Questions?",
    description: "We're here to help!",
    ctaText: "Contact Us",
    ctaLink: "#contact",
    content: () => (
      <p>
        Get in touch:
        <br />
        <br />
        Email: ec@uta.edu
        <br />
        Phone: +1 214-604-2001
        <br />
        <br />
        Location: University of Texas at Arlington
        <br />
        <br />
        Follow us on social media for updates!
        <br />
        @MavsThink2025
      </p>
    ),
  },
];
