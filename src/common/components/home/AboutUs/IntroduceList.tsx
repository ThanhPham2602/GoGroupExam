import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { FA_ICON } from "@/src/config/img";

IntroduceList.propTypes = {};

const dataIntroduceList: Array<string> = [
  "Tư vấn & thiệt kế giải pháp công nghệ thông tin",
  "Xây dựng phần mềm",
  "Giải pháp Telesales và chăm sóc khách hàng.",
  "Môi giới tài chính và bất động sản",
  "Tư vấn và triển khai các dịch vụ DigiTal Marketing",
];

function IntroduceList() {
  return (
    <div>
      {dataIntroduceList.map((data, ind) => {
        return (
          <div
            key={ind}
            className="flex 
          "
          >
            <Image src={FA_ICON} alt="icon" height={17} width={17} />
            <div>{data}</div>
          </div>
        );
      })}
    </div>
  );
}

export default IntroduceList;
