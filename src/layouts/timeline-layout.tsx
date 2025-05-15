import React from "react";
import { Timeline } from "@/components/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "9:00 am",
      content: (
        <div>
          <p className="text-lg font-semibold text-slate-300 md:text-xl">
            Check-in & Welcome Breakfast
          </p>
          <p className="text-sm text-slate-300 md:text-base">
            Start your day with coffee, breakfast, and networking. Pick up your
            swag bag and meet fellow innovators. Early birds get special
            surprise gifts!
          </p>
        </div>
      ),
    },
    {
      title: "10:30 am",
      content: (
        <div>
          <p className="text-lg font-semibold text-slate-300 md:text-xl">
            Opening Ceremony & Keynote
          </p>
          <p className="text-sm text-slate-300 md:text-base">
            Kick off with inspiring speeches from industry leaders and
            successful entrepreneurs. Learn about the challenges and prizes up
            for grabs!
          </p>
        </div>
      ),
    },
    {
      title: "11:30 am",
      content: (
        <div>
          <p className="text-lg font-semibold text-slate-300 md:text-xl">
            Team Formation & Ideation Workshop
          </p>
          <p className="text-sm text-slate-300 md:text-base">
            Find your perfect team through our interactive matching session.
            Brainstorm with mentors in our guided ideation workshops.
          </p>
        </div>
      ),
    },
    {
      title: "2:00 pm",
      content: (
        <div>
          <p className="ext-lg font-semibold text-slate-300 md:text-xl">
            Hacking Begins & Mentor Sessions
          </p>
          <p className="text-sm text-slate-300 md:text-base">
            Start building your solutions! Expert mentors from various
            industries will be available for one-on-one consultations throughout
            the event.
          </p>
        </div>
      ),
    },
    {
      title: "6:00 pm",
      content: (
        <div>
          <p className="text-lg font-semibold text-slate-300 md:text-xl">
            Pitch Workshop & Dinner
          </p>
          <p className="text-sm text-slate-300 md:text-base">
            Learn the art of pitching from startup veterans while enjoying
            dinner. Get feedback on your preliminary ideas and perfect your
            presentation skills.
          </p>
        </div>
      ),
    },
    {
      title: "9:00 pm",
      content: (
        <div>
          <p className="text-lg font-semibold text-slate-300 md:text-xl">
            Final Presentations & Awards
          </p>
          <p className="text-sm text-slate-300 md:text-base">
            Present your solutions to our panel of judges. Winners will be
            announced, followed by networking and celebrations! Prizes include
            mentorship opportunities and startup resources.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
