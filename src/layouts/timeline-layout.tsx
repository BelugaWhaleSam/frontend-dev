import React from "react";
import { Timeline } from "@/components/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Registration Opens",
      content: (
        <div>
          <p className="text-lg font-semibold text-slate-300 md:text-xl">
            Registration Opens for Mavs Think 2025
          </p>
          <p className="text-sm text-slate-300 md:text-base">
            Join us for a day of innovation and creativity at the Mavs Think
            Business Hackathon! Registration opens on Sept, 2025. Don't
            miss out on this opportunity to showcase your skills and win
            exciting prizes!
          </p>
        </div>
      ),
    },
    {
      title: "Day 1",
      content: (
        <div>
          <p className="text-lg font-semibold text-slate-300 md:text-xl">
            Check-in & Welcome Breakfast (9 AM – 7 PM )
          </p>
          <p className="text-sm text-slate-300 md:text-base">
            Opening Ceremony & Team Setup, Workshops (Business Model Canvas &
            Pitching 101), "Pitch Deck Building & Mentorship Rounds, Submission
            & Top 10 Finalists Announcement
          </p>
        </div>
      ),
    },
    {
      title: "Day 2",
      content: (
        <div>
          <p className="text-lg font-semibold text-slate-300 md:text-xl">
            Final Pitches (10 AM – 3 PM )
          </p>
          <p className="text-sm text-slate-300 md:text-base">
            Finalist Presentations, Fun Activity & Networking, Award Ceremony &
            Lunch, Closing Ceremony
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
