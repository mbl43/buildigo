import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/spotlight";
import Image from "next/image";
import Heroimg from "../../public/Heroimage.jpg";
import CountUp from "./ui/CountUp";
export default function Hero() {
  return (
    
    <div className="flex w-auto h-auto md:h-screen flex-row items-center justify-center overflow-auto mx-auto relative py-10 md:py-0">
      <div className="relative text-left p-4 z-8">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <h1 className="mt-20 md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-3">
          Masters of Consistency <br />
          and Quality.
        </h1>
        <p className="mt-4 font-normal text-left md:text-lg text-neutral-300 max-w-lg">
          Buildingo will provide quality residential, commercial and industrial
          building solutions that are innovative in nature.
        </p>
        <div className="mt-4 space-x-4 flex">
          <Link href={"#"}>
            <Button
              borderRadius="1.75rem"
              className="bg-black text-white border-slate-800 cursor-pointer"
            >
              Explore
            </Button>
          </Link>
          <Link href={"#"}>
            <Button
              borderRadius="1.75rem"
              className="bg-black text-white border-slate-800 cursor-pointer"
            >
              Contact Us
            </Button>
          </Link>
        </div>
        <div className="flex mt-10 flex-row gap-10">
          <div className="text-center">
            <CountUp
              from={0}
              to={943}
              separator=","
              direction="up"
              duration={1}
             
              className="count-up-text text-4xl"
            />
            <p className="my-3">Projects Done </p>
          </div>
          <div className="text-center">
            <CountUp
              from={0}
              to={300}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-4xl "
            />
            <span className="text-4xl text-center ml-1">+</span>
            <p className="my-3">Total Employees </p>
          </div>
          <div className="text-center">
            <CountUp
              from={0}
              to={1582}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-4xl"
            />
            <p className="my-3">Buildings Done </p>
          </div>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image
          alt=""
          src={Heroimg}
          className="rounded-2xl rounded-bl-[150px] md:rounded-bl-[200px] w-[450px]"
        />
      </div>
    </div>
  );
}
