import { Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FloatingNavClient from "@/components/ui/FloatingNavClient";
import { navItems } from "@/data";

const Grid = dynamic(() => import("@/components/Grid"));
const Projects = dynamic(() => import("@/components/Projects"));
const Experience = dynamic(() => import("@/components/Experience"));
const Approach = dynamic(() => import("@/components/Approach"));

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNavClient navItems={navItems} />
        <Hero />
        <Suspense fallback={<div className="h-96" />}>
          <Grid />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <Approach />
        </Suspense>
        <Footer />
      </div>
    </main>
  );
}