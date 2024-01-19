import { error } from "console";
import React from "react";
import IntroduceList from "./IntroduceList";
import Image from "next/image";
import { INTRO_IMAGE } from "@/src/config/img";

const AboutUs: React.FC = async ({}) => {
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-2">
      <div className="flex-1 md:col-span-1">
        <img src={INTRO_IMAGE} alt="image" />
      </div>
      <div className="flex-1 md:col-span-1">
        <h2>Về GoGroup</h2>
        <p>
          Công ty Cổ phần GoGroup được thành lập từ tháng 11 năm 2017 do sở kế
          hoạch và đầu tư thành phố Hà Nội cấp. Lĩnh vực hoạt động chính.
        </p>
        <IntroduceList />
      </div>
    </div>
  );
};

export default AboutUs;
