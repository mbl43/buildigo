"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import Tooltip from "./Tooltip";

export default function Team() {
  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden items-center justify-center">
      <WavyBackground className="w-full max-w-7xl justify-center flex items-center h-full flex-col gap-8">
        <h2 className="text-3xl z-10 md:text-4xl lg:text-7xl text-white font-bold text-center ">
          Meet Our Team
        </h2>
        <p className="text-base z-10 md:text-xl lg:text-2xl text-white text-center mx-3">Discover the talented professionals who will guide your construction journey</p>
        <Tooltip/>
      </WavyBackground>
    </div>
  );
}
