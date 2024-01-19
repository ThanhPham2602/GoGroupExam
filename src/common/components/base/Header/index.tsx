import React from "react";
// import Block from "../Block";
import TopBar from "./Menu";
import WrapHeader from "./WrapHeader";
import HomeProvider from "@/context/home/HomeProvider";
// import { getListMenu } from "@/repository/menu";
import HeaderMobile from "./MenuMobile";
import Menu from "./Menu";

async function Header() {
  //   const listMenu = await getListMenu("header");

  //   const index =
  //     listMenu?.menus.findIndex((item, index) => {
  //       if (item?.title === "SeANet") return index;
  //     }) || 0;
  //   const dataMainMenu = listMenu?.menus.slice(0, index + 1);
  //   const dataTopBarMenu = listMenu?.menus.slice(index + 1);

  const dataTopBarMenu: MenuRoute[] = [
    { id: 1, title: "Trang chủ", url: "" },
    { id: 2, title: "Sản phẩm & Dịch vụ", url: "" },
    { id: 3, title: "Đối tác", url: "" },
    { id: 4, title: "Về chúng tôi", url: "" },
    { id: 5, title: "Blog", url: "" },
    { id: 6, title: "Liên hệ", url: "" },
  ];

  return (
    // <HomeProvider>
    <header className=" z-[999]">
      {/* <WrapHeader wrapHeaderStyles="z-20 bg-primary py-3" hiddenInDesktop>
          <HeaderMobile listDataMenu={listMenu?.menus} />
        </WrapHeader> */}
      <WrapHeader
        wrapHeaderStyles="bg-primary h-[48px] max-h-[48px] leading-[48px] z-30"
        hiddenInMobile
        hiddenInTablet
      >
        <Menu routes={dataTopBarMenu} />
      </WrapHeader>
    </header>
    // </HomeProvider>
  );
}

export default Header;
