"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { TOP_BAR_TEXT } from "@/config/text";
import Link from "next/link";
import { HomeContext } from "@/context/home/HomeProvider";

const HeaderMobileMenu: React.FC = () => {
  const { dispatch } = useContext(HomeContext);

  const handleClickBtnMenu = () => {
    dispatch({ type: "setDrawerOpen" });
  };

  const handleClickBtnSearch = () => {
    dispatch({
      type: "setShowModalSearch",
    });
  };

  return (
    <nav className="flex justify-between">
      <div className="">
        <Link className="flex justify-center cursor-pointer" href={"/"}>
          <Image
            alt="logo-header"
            src={"logoGoGroup.png"}
            width={135}
            height={28}
          ></Image>
        </Link>
      </div>
      <div
        className="flex align-middle cursor-pointer"
        onClick={handleClickBtnMenu}
      >
        <Image
          alt="menu-btn"
          src={"menu-btn.svg"}
          width={20}
          height={18}
        ></Image>
      </div>
    </nav>
  );
};

export default HeaderMobileMenu;
