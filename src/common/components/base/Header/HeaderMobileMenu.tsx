"use client";
import React, { useContext } from "react";
import Image from "next/image";

import Link from "next/link";
// import { HomeContext } from "@/context/home/HomeProvider";
import { ICON_MENU, LOGO } from "@/src/config/img";

const HeaderMobileMenu: React.FC = () => {
  // const { dispatch } = useContext(HomeContext);

  // const handleClickBtnMenu = () => {
  //   dispatch({ type: "setDrawerOpen" });
  // };


  return (
    <nav className="flex justify-between">
      <div className="">
        <Link className="flex justify-center cursor-pointer" href={"/"}>
          <Image
            alt="logo-header"
            src={LOGO}
            width={135}
            height={28}
          ></Image>
        </Link>
      </div>
      <div
        className="flex align-middle cursor-pointer"
        // onClick={handleClickBtnMenu}
      >
        <Image
          alt="menu-btn"
          src={ICON_MENU}
          width={32}
          height={32}
        />
      </div>
    </nav>
  );
};

export default HeaderMobileMenu;
