"use client";
import { LOGO } from "@/src/config/img";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface MenuProps {
  menuStyles?: string;
  productMenu?: string;
  routes: Array<MenuRoute>;
}

const Menu = ({ menuStyles, productMenu, routes }: MenuProps) => {
  return (
    <div className=" flex ">
      <Image src={LOGO} alt="logoGG" height={100} width={100} />
      <div className="justify-center gap-8 flex ">
        {routes?.map((route, index) => (
          <Link
            key={route.id}
            href={route.url}
            className="text-[15px] 2xl:text-[16px] leading-[22px] font-semibold text-white hover:scale-105 transform"
          >
            {route.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
