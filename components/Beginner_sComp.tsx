"use client";
import React from "react";
import { Card } from "@/components/ui/Card";
import { PinContainer } from "@/components/ui/3d-pin";
import { motion, AnimatePresence } from 'framer-motion';
import { beginner_s_resources } from "../data/beginner_s_resources";

export function Beginner_sComp() {
  return (
    <div className="container mx-auto px-6 py-10 bg-[#030303]">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Getting Started with Hackathon -
        </span>{" "}
        Beginner's Resources
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-8">
        Kickstart your hackathon journey with beginner-friendly resources
        designed to guide you through the essentials of web development. From
        understanding the fundamentals of HTML, CSS, and JavaScript to mastering
        version control and collaborative coding, these resources will help you
        build a strong foundation and boost your confidence for your first
        hackathon.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-x-6 gap-y-12">
        {beginner_s_resources.map((site, index) => (
        //   <motion.div
        //   key={site.title}
        //   initial={{ opacity: 0, y: 20 }}
        //   whileInView={{ opacity: 1, y: 0 }}
        //   transition={{ delay: index * 0.1 }}
        // >
          <Card
            key={index}
            title={site.title}
            href={site.href}
            imageUrl={site.imageUrl}
            description={site.description}
          />
          // </motion.div>
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
