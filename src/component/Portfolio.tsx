"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import data from "@/data/portfolio.json";
interface portfoliodata {
  id: number;
  category: string;
  imageUrl:string;
}
export default function Portfolio() {
  const FeatureBuilding = data.portfolio.filter(
    (Portfolio: portfoliodata) => Portfolio.id
  );
  return (
    <div className=" w-auto h-auto overflow-auto mx-auto relative bg-gray-900">
      <div className="mx-auto w-full text-center">
        <h1 className="mt-20 md:mt-0 text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-10 ">
          Project PortFolio
        </h1>
        <p className="mx-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia!
        </p>
      </div>
      <div className="flex m-10 gap-10 flex-wrap justify-center">
        {FeatureBuilding.map((res: portfoliodata) => (
          <BackgroundGradient
            key={res.id}
            className="rounded-[22px] max-w-md p-2 bg-white dark:bg-zinc-900 flex justify-center"
          >
            <Image
              src={res.imageUrl}
              alt="jordans"
              height="250"
              width="250"
              className="object-cover rounded-md"
            />
            <p className="text-center sm:text-xl text-white mb-6 absolute bottom-0 uppercase">
              {res.category}
            </p>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
}
