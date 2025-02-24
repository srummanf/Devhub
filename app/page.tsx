"use client";
import { useState, useEffect } from "react";
import { AnimatedUILibraries } from "@/components/AnimatedUILibraries";
import { Beginner_sComp } from "@/components/Beginner_sComp";
import { Dashboard } from "@/components/Dashboard";
import { DesignComp } from "@/components/DesignComp";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HeroGeometric from "@/components/Hero2";
import { MiscComp } from "@/components/MiscComp";
import PromptingIsAllYouNeed from "@/components/PromptingIsAllYouNeed";
import ScrollComp from "@/components/ScrollComp";
import { TakeABreak } from "@/components/TakeABreak";
import { UILibraries } from "@/components/UILibraries";
import { Web3Comp } from "@/components/Web3Comp";
import { MainNav } from "@/components/MainNav";
import { Framework } from "@/components/Framework";
import { ScrollableCardSection } from "@/components/ScrollableCards";
import { BackendComp } from "@/components/BackendComp";

export default function Home() {
  return (
    <>
      <HeroGeometric />
      <ScrollableCardSection
        items={[
          {
            id: "Beginner_sComp",
            title: "Beginner's Guide",
            description: "Get started with web development.",
          },
          {
            id: "DesignComp",
            title: "UI/UX Design Essentials",
            description: "UI/UX tools and inspirations.",
          },
          {
            id: "Web3Comp",
            title: "Web3 Essentials",
            description: "Learn about blockchain & smart contracts.",
          },
          {
            id: "Framework",
            title: "Web Dev Essentials",
            description: "Learn about blockchain & smart contracts.",
          },
          {
            id: "UILibraries",
            title: "UI Component Libraries",
            description: "Explore pre-built UI components.",
          },
          {
            id: "AnimatedUILibraries",
            title: "Animated UI Libraries",
            description: "Enhance UI with animations.",
          },
          {
            id: "BackendComp",
            title: "Backend Dev Essentials",
            description: "Enhance UI with animations.",
          },
          {
            id: "MiscComp",
            title: "Miscellaneous Tools",
            description: "Useful tools for developers.",
          },

        ]}
      />
      <Beginner_sComp />
      <DesignComp />
      <Web3Comp />
      <Framework />
      <UILibraries />
      <AnimatedUILibraries />
      <BackendComp />
      <MiscComp />
      <TakeABreak />
      <PromptingIsAllYouNeed />
      <Footer />
    </>
  );
}
