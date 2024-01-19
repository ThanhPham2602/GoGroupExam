import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

type dataContractType = {
  icon?: string;
  title?: string;
  content?: string;
};

const dataContractList: Array<dataContractType> = [
  {
    icon: "",
    title: "1.Liên hệ",
    content: "Liên hệ tư vấn đánh giá khách quan tiềm năng của dự án.",
  },
  {
    icon: "",
    title: "2.Trao đổi trực tiếp",
    content: "Tạo cuộc hẹn gặp mặt trao đổi cụ thể chi tiết về dự án.",
  },
  {
    icon: "",
    title: "3.Kí hợp đồng",
    content: "Thống nhất thỏa thuận giữa hai bên qua hợp đồng đối tác..",
  },
  {
    icon: "",
    title: "4. Bàn giao",
    content: "Bàn giao dự án đã hoàn thành theo đúng thời hạn trên hợp đồng.",
  },
  {
    icon: "",
    title: "5. Bảo hành",
    content: "Chính sách hỗ trợ bảo hành trọn đời cho bất kì dự án.",
  },
];

function ContractList() {
  return (
    <div>
      {dataContractList.map((data, ind) => {
        return (
          <div
            key={ind}
            className="flex 
          "
          >
            <div>{data.title}</div>
            <div>{data.content}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ContractList;
