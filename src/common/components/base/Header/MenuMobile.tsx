"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { HomeContext } from "@/context/home/HomeProvider";

const MenuMobile: React.FC<{
  listDataMenu?: Menu[];
  onClickModalRegister: () => void;
}> = ({ listDataMenu, onClickModalRegister }) => {
  console.log("listDataMenu:: ", listDataMenu);
  const { state, dispatch } = useContext(HomeContext);
  const handleCloseDrawer = () => {
    dispatch({ type: "setDrawerClose" });
  };
  const handleShowSubMenu = (itemMenu: Menu) => {
    console.log("itemMenu:: ", itemMenu);
    dispatch({
      type: "setShowSubMenuMobile",
      payload: {
        isShowSubMenuMobile: true,
        isShowMenuMobile: false,
        dataSubMenu: itemMenu,
      },
    });
  };

  return (
    <section
      className={
        `${state?.isShowMenuMobile ? "block" : "hidden"}` +
        " " +
        "transition-opacity duration-500 ease-in-out"
      }
    >
      {listDataMenu?.map((itemMenu, index) => {
        const jsonObject = JSON.parse(
          String(itemMenu?.decoration).replace(/^'|'$/g, "")
        );

        return itemMenu?.children.length > 0 ? (
          <div
            key={index}
            className="flex  text-gray1 border-b border-[#E0E0E0] hover:bg-slate-100 relative items-center  z-10 cursor-pointer group"
            onClick={() => handleShowSubMenu(itemMenu)}
          >
            <Link
              className="font-bold text-[16px] text-gray1 hover:text-gray1 p-3  z-20 cursor-grab"
              style={jsonObject}
              href={itemMenu?.url}
              onClick={handleCloseDrawer}
            >
              {itemMenu?.title}
            </Link>

            <div
              className="flex justify-center items-center cursor-pointer group absolute  right-1"
              onClick={() => handleShowSubMenu(itemMenu)}
            >
              <Image
                alt="arr-icon-right"
                src={"/images/icon-primary/icon-right-gray.svg"}
                width={30}
                height={20}
                className="!max-h-[16px] !h-full group-hover:scale-110 transition ease-in-out duration-300"
              ></Image>
            </div>
          </div>
        ) : itemMenu?.url.startsWith("http") ? (
          <Link
            key={index}
            href={itemMenu?.url}
            className="flex justify-between text-gray1 p-3 border-b border-[#E0E0E0] hover:bg-slate-100 hover:text-gray1 cursor-pointer"
            onClick={handleCloseDrawer}
            target="_blank"
          >
            <div
              className="font-bold text-[16px] cursor-pointer"
              style={jsonObject}
            >
              {itemMenu?.title}
            </div>
          </Link>
        ) : itemMenu?.url.startsWith("##modal") ? (
          <Link
            key={index}
            href={itemMenu?.url}
            className="flex justify-between text-gray1 p-3 border-b border-[#E0E0E0] hover:bg-slate-100 hover:text-gray1 cursor-pointer"
            onClick={() => {
              handleCloseDrawer();
              onClickModalRegister();
            }}
          >
            <div
              className="font-bold text-[16px] cursor-pointer"
              style={jsonObject}
            >
              {itemMenu?.title}
            </div>
          </Link>
        ) : (
          <Link
            key={index}
            href={itemMenu?.url}
            className="flex justify-between text-gray1 p-3 border-b border-[#E0E0E0] hover:bg-slate-100 hover:text-gray1 cursor-pointer"
            onClick={handleCloseDrawer}
          >
            <div
              className="font-bold text-[16px] cursor-pointer"
              style={jsonObject}
            >
              {itemMenu?.title}
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default MenuMobile;
