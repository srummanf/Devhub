"use client";

import * as React from "react";
import TiltCard from "./animata/card/tilted-card";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

interface ScrollableCardSectionProps {
  items?: { id: string; title: string; description: string }[];
}

export function ScrollableCardSection({ items }: ScrollableCardSectionProps) {
  // Smooth scroll function
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Explore Developer Resources
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items?.map((item, index) => (
          <div
            key={index}
            onClick={() => handleScroll(item.id)}
            className="cursor-pointer shadow-lg rounded-xl p-6 text-white"
          >
            <InteractiveHoverButton>{item.title}</InteractiveHoverButton>
            {/* <TiltCard
              className="hover:bg-[#F9733E]"
              title={item.title}
            /> */}
            {/* <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-300 mt-2">{item.description}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
