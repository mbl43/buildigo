"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/component/ui/3d-card";
import Image from "next/image";
import data from "@/data/portfolio.json";
export default function page() {
  return (
    <div className="flex w-full md:h-screen flex-row items-center justify-center overflow-auto mx-auto relative pt-20  bg-black">
      <div className="flex flex-wrap flex-row gap-6 w-full h-full justify-center">
        {data.portfolio.map((portfolioData) => (
          <CardContainer className="inter-var " key={portfolioData.id}>
            <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                {portfolioData.category}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className=" text-sm max-w-sm mt-2 text-neutral-300"
              >
             Lorem ipsum dolor sit amet consectetur.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={portfolioData.imageUrl}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black border-1 border-white/[0.2] text-white text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
