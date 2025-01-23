"use client";

import { Header } from "@/components/designs/header";
import { Hero } from "@/components/designs/hero";

export default function Home() {
  return (
      <div className="text-white overflow-hidden bg-black">
        <Header />
        <Hero />
      </div>
  );
}