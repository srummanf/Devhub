"use client"

import * as React from "react"
import { useSelectedLayoutSegment } from "next/navigation"

import { cn } from "@/lib/utils"

interface MainNavProps {
  items?: string[] // Array of section IDs
  children?: React.ReactNode
}

export function MainNav({ items }: MainNavProps) {
  const segment = useSelectedLayoutSegment()

  // Function to handle the smooth scroll
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <div className="flex gap-6 md:gap-10">
      
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item)}  // Trigger the scroll on click
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item === segment ? "text-foreground" : "text-foreground/60"
              )}
            >
              {item.replace(/([A-Z])/g, ' $1').trim()}  {/* Optional: human-friendly name for the section */}
            </button>
          ))}
        </nav>
      ) : null}
    </div>
  )
}
