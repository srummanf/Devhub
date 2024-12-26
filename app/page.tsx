import { Dashboard } from "@/components/Dashboard";
import Hero from "@/components/Hero";
import ScrollComp from "@/components/ScrollComp";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        <Hero />
        <ScrollComp/>
        <Dashboard/>
      </div>

    </>
  );
}
