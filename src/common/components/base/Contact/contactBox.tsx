"use client";
import { Form, Input, notification } from "antd";
import Link from "next/link";
import React, { useEffect } from "react";

// type RegisterConsultingData {
//     email: string
// }

function contactBox() {
  //   const handleSubmit = (email)=> {
  //     console.log("email", email);
  //   }

  return (
    <div>
      <div>
        <Form.Item label="Email*" name="email">
          <Input allowClear placeholder="Nhập email*" />
        </Form.Item>
        <button className="text-white bg-buttonColor py-[13px] px-[29px] ">
          Đăng ký
        </button>
      </div>
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

export default contactBox;
