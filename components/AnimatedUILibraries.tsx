"use client";
import React from "react";
import { Card } from "@/components/ui/Card";
import { PinContainer } from "@/components/ui/3d-pin";
import { useRef } from "react";
import VariableProximity from "@/components/VariablePromixity";
import { AnimatedUILibraries_resources } from "../data/AnimatedUILibraries_resources";

export function AnimatedUILibraries() {
  const containerRef = useRef(null);
  return (
    <div
      id="AnimatedUILibraries"
      className="container mx-auto px-6 py-10 bg-[#030303]"
    >
      {/* <h2 className="text-4xl font-extrabold text-slate-100 mb-6 ml-4 tracking-tight">
        Animated UI Libraries
      </h2> */}
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        {/* <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#b42f41] from-[#e1764f]">
          Getting Started with Hackathon -Beginner's Guide
          </span> */}
        <div ref={containerRef} className="relative mb-6">
          <VariableProximity
            label={"Animated UI Libraries and Components"}
            className={
              "variable-proximity-demo text-transparent bg-clip-text bg-gradient-to-r to-[#b42f41] from-[#e1764f]"
            }
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-8">
        Enhance your web development projects with animation libraries that
        bring interactive and dynamic elements to your UI. Explore libraries
        designed to work seamlessly with frameworks like React, helping you
        create smooth transitions, animations, and engaging user experiences.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-x-6 gap-y-12">
        {AnimatedUILibraries_resources.map((site, index) => (
          <Card
            key={index}
            title={site.title}
            href={site.href}
            imageUrl={site.imageUrl}
            description={site.description}
          />
        ))}
        {/* <PinContainer
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Aceternity UI
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Customizable Tailwind CSS and Framer Motion Components.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer> */}
      </div>
    </div>
  );
}
