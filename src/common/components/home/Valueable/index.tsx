import { error } from "console";
import React from "react";

const Valueable: React.FC = async ({}) => {
  //   const getData = async () => {
  //     const res = await getValueableData();

  //     const { body } = res;

  //     if (body?.status === "OK") {
  //       return body.data;
  //     } else {
  //       console.log(error);
  //     }
  //   };
  //   const Valueable = await getData();

  return (
    <div className="flex ">
      <div className="flex-1">123</div>
      <div className="grid md:grid-col-2 lg:grid-col-3"></div>
    </div>
  );
};

export default Valueable;
