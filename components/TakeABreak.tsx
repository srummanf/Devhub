"use client";
import React from "react";
import { Card } from "@/components/ui/Card";
import { PinContainer } from "@/components/ui/3d-pin";

import { TakeABreak_resources } from "../data/TakeABreak_resources";

export function TakeABreak() {
  return (
    <div id="TakeABreak" className="container mx-auto px-6 py-10 bg-[#030303]">
      <h2 className="text-4xl font-extrabold text-slate-100 mb-6 ml-4 tracking-tight">
        Take a Break - Chill Zone
      </h2>
      <p className="text-lg text-slate-300 mb-6 ml-4 leading-relaxed">
        Sometimes, a little break is all you need to recharge and boost your
        creativity. Step into the Chill Zone with fun, relaxing activities or
        inspiration to unwind. Whether it's a short game, a moment of
        mindfulness, or just a quick mental reset, this space offers a
        refreshing pause before you jump back into your hackathon hustle.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-x-6 gap-y-12">
        {TakeABreak_resources.map((site, index) => (
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
