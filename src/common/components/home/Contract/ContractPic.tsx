import { CONTRACT_IMAGE } from "@/src/config/img";
import React from "react";

function ContractPic() {
  return (
    <div>
      <h2>Hợp đồng hợp tác</h2>
      <p>
        Tư vấn dự án tận tâm, đáp ứng được nhu cầu khách hàng, phù hợp với doanh
        nghiệp của bạn.
      </p>

      <img src={CONTRACT_IMAGE} alt="image" />
    </div>
  );
}

export default ContractPic;
