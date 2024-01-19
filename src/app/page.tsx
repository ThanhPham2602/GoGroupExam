import AboutUs from "../common/components/home/AboutUs";
import Valueable from "../common/components/home/Valueable";
import Client from "../common/components/home/Clients";
import CoreValue from "../common/components/home/CoreValue";
import Contract from "../common/components/home/Contract";
import Block from "../common/components/base/Block";
import BannerHome from "../common/components/home/Banner";
import CoverImage from "../common/components/home/Banner/CoverImage";
import Context from "../common/components/home/Banner/Context";

function Home() {
  return (
    <main className="relative z-[100]">
      <Block isFullWidth>
        <CoverImage>
          <Block blockStyles=" w-full h-full relative z-20 max-w-primary">
            <Context />
          </Block>
        </CoverImage>
      </Block>

      <Block isFullWidth>
        <AboutUs />
      </Block>

      <Block blockStyles=" mt-[20px] md:mt-[30px]">
        <Valueable />
      </Block>

      <Block blockStyles="mt-[20px] md:mt-[30px]">
        <Client />
      </Block>

      <Block blockStyles="mt-[20px] md:mt-[30px]">
        <Contract />
      </Block>

      <Block blockStyles="mt-[20px] md:mt-[30px]">
        <CoreValue />
      </Block>
    </main>
  );
}

const HomePage = () => {
  return <Home />;
};

export default HomePage;
