import React from "react";


import WrapHeader from "./WrapHeader";

import HeaderMobile from "./MenuMobile";
import Menu from "./Menu";
import { dataTopBarMenu } from "@/src/config/mockApi";
import HeaderMobileMenu from "./HeaderMobileMenu";

async function Header() {
 

  

  return (
    // <HomeProvider>
    <header className=" z-[999]">
      <WrapHeader wrapHeaderStyles="z-20 bg-primary py-3" hiddenInDesktop>
          <HeaderMobileMenu  />
        </WrapHeader>
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
