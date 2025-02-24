"use client";
import { Inter } from 'next/font/google'
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
    <section className=" bg-[#030303] py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        {items?.map((item, index) => (
          <div
            key={index}
            onClick={() => handleScroll(item.id)}
            className="h-28 cursor-pointer text-white"
          >
            <InteractiveHoverButton>{item.title}</InteractiveHoverButton>
          </div>
        ))}
      </div>
    </section>
  );
}
