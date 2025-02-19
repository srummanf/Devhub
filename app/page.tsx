// import { AnimatedUILibraries } from "@/components/AnimatedUILibraries";
// import { Beginner_sComp } from "@/components/Beginner_sComp";
// import { Dashboard } from "@/components/Dashboard";
// import { DesignComp } from "@/components/DesignComp";
// import Footer from "@/components/Footer";
// import Hero from "@/components/Hero";
// import HeroGeometric from "@/components/Hero2";
// import { MiscComp } from "@/components/MiscComp";
// import PromptingIsAllYouNeed from "@/components/PromptingIsAllYouNeed";
// import ScrollComp from "@/components/ScrollComp";
// import { TakeABreak } from "@/components/TakeABreak";
// import { UILibraries } from "@/components/UILibraries";
// import { Web3Comp } from "@/components/Web3Comp";
// import CountUp from '@/components/CountUp';
// import Image from "next/image";

// export default function Home() {
//   return (
//     <>
//       {/* <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div> */}

//         <HeroGeometric />
//         {/* <ScrollComp/> */}
//         {/* <Dashboard/> */}
//         <Beginner_sComp/>
//         <Web3Comp/>
//         <UILibraries/>
//         <AnimatedUILibraries/>
//         <MiscComp/>
//         <DesignComp/>
//         <TakeABreak/>
//         <PromptingIsAllYouNeed/>
//         <Footer/>
//       {/* </div> */}

//     </>
//   );
// }
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
import { FinalDance } from "@/components/FinalDance";
import { ScrollableCardSection } from "@/components/ScrollableCards";

export default function Home() {
  return (
    <>
      {/* <MainNav
        items={[
          "Beginner_sComp",
          "Web3Comp",
          "UILibraries",
          "AnimatedUILibraries",
          "MiscComp",
          "DesignComp",
          "TakeABreak",
        ]}
      /> */}
      <HeroGeometric />
      <ScrollableCardSection
          items={[
            {
              id: "Beginner_sComp",
              title: "Beginner's Guide",
              description: "Get started with web development.",
            },
            {
              id: "Web3Comp",
              title: "Web3 Essentials",
              description: "Learn about blockchain & smart contracts.",
            },
            {
              id: "UILibraries",
              title: "UI Libraries",
              description: "Explore pre-built UI components.",
            },
            {
              id: "AnimatedUILibraries",
              title: "Animated UI",
              description: "Enhance UI with animations.",
            },
            {
              id: "MiscComp",
              title: "Miscellaneous Tools",
              description: "Useful tools for developers.",
            },
            {
              id: "DesignComp",
              title: "Design Resources",
              description: "UI/UX tools and inspirations.",
            },
            {
              id: "FinalDance",
              title: "Final Dance",
              description: "UI/UX tools and inspirations.",
            },
            {
              id: "TakeABreak",
              title: "Take a Break",
              description: "Fun & relaxing resources.",
            }
          ]}
        />
      <Beginner_sComp />
      <Web3Comp />
      <UILibraries />
      <AnimatedUILibraries />
      <MiscComp />
      <DesignComp />
      <FinalDance/>
      <TakeABreak />
      <PromptingIsAllYouNeed />
      <Footer />
    </>
  );
}
