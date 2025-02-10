"use client";

import { About } from "@/components/designs/about";
import { Achievements } from "@/components/designs/achievements";
import { Contacts } from "@/components/designs/contacts";
import { Education } from "@/components/designs/education";
import { Header } from "@/components/designs/header";
import { Hero } from "@/components/designs/hero";
import { Project } from "@/components/designs/projects";
import { Skills } from "@/components/designs/skills";

export default function Home() {
  return (
      <div className="text-white overflow-hidden bg-black">
        <Header />
        <Hero />
        <About />
        <Skills></Skills>
        <Project></Project>
        <Achievements></Achievements>
        <Education></Education>
        <Contacts></Contacts>
      </div>
  );
}