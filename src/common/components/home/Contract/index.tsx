import { error } from "console";
import React from "react";
import ContractList from "./ContractList";
import ContractPic from "./ContractPic";

const Contract: React.FC = async ({}) => {
  return (
    <div className="flex flex-col-reverse md:flex-row ">
      <ContractPic />
      <ContractList />
    </div>
  );
};

export default Contract;
