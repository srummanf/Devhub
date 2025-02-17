"use client"

import * as React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"

interface MainNavProps {
  items?: string[] // Array of section IDs
}

export function MainNav({ items }: MainNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Function to handle the smooth scroll
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setMobileMenuOpen(false) // Close menu after clicking (for mobile)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-white text-2xl font-bold tracking-wide"></div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {items?.map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item)}
              className={cn(
                "text-white text-lg font-medium transition duration-300 ease-in-out hover:text-blue-400"
              )}
            >
              {item.replace(/([A-Z])/g, " $1").trim()}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/80 backdrop-blur-md shadow-lg p-4 flex flex-col items-center space-y-4">
          {items?.map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item)}
              className="text-white text-lg font-medium transition duration-300 ease-in-out hover:text-blue-400"
            >
              {item.replace(/([A-Z])/g, " $1").trim()}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
