"use client";
import React from "react";
import { Card } from "@/components/ui/Card";
import { PinContainer } from "@/components/ui/3d-pin";
import { motion, AnimatePresence } from 'framer-motion';
import { beginner_s_resources } from "../data/beginner_s_resources";

export function Beginner_sComp() {
  return (
    <div id="Beginner_sComp" className="container mx-auto px-6 py-10 bg-[#030303]">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#b42f41] from-[#e1764f]">
          Getting Started with Hackathon
        </span>{" "}
       
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-8">
        Kickstart your hackathon journey with beginner-friendly resources
        designed to guide you through the essentials of web development. From
        understanding the fundamentals of HTML, CSS, and JavaScript to mastering
        version control and collaborative coding, these resources will help you
        build a strong foundation and boost your confidence for your first
        hackathon.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-x-6 gap-y-12">
        {beginner_s_resources.map((site, index) => (
          <Card
            key={index}
            title={site.title}
            href={site.href}
            imageUrl={site.imageUrl}
            description={site.description}
            tag={site.tag}
          />
        ))}
      </div>
    </div>
  );
}
