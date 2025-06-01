"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import Icon from "../../public/icon.png";
export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-2 max-w-screen md:max-w-xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div>
          <Image src={Icon} alt="icon" className="w-8 invert"/>
        </div>
       <div className="flex space-x-4 md:space-x-8 items-center justify-between">
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>

          <Link href={"/portfolio"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Portfolio"
            ></MenuItem>
          </Link>

          <Link href={"/about-us"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="About Us"
            ></MenuItem>
          </Link>

          <Link href={"/contact"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact"
            ></MenuItem>
          </Link>
       </div>
      </Menu>
    </div>
  );
}
