"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Context() {
  return (
    <div className="flex flex-col">
      <h2 className="text-[44px] text-primaryColor">
        Chuyển Đổi Số cùng GoGroup
      </h2>
      <p className="text-white text-lg">
        Chúng tôi sử dụng công nghệ số để tạo ra những bước nhảy vọt trong việc
        cải thiện năng suất lao động, tốc độ và hiệu quả. Đồng thời áp dụng các
        tiêu chuẩn ISO 9001 và ISO 21001 vào tất cả các sản phẩm.
      </p>
      <Link
        href={"https://gogroup.vn/contact"}
        className=" bg-buttonColor text-white text-sm px-[48px] py-[18px] roun"
      >
        <span className="">Liên hệ với chúng tôi</span>
      </Link>
      <div>
        <p className="text-white text-[15px]">Bạn cần hỗ trợ</p>
        <Link
          href={"https://gogroup.vn/contact"}
          className="text-[15px] text-[#F8B526]"
        >
          Liên lạc ngay với chúng tôi
        </Link>
      </div>
    </div>
  );
}

export default Context;
