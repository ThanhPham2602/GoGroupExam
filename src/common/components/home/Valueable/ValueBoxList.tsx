import React from "react";
import ValueBox from "./ValueBox";

const ValueBoxList: React.FC<{ value?: Array }> = ({ value }) => {
  return (
    <div className="grid md:grid-col-2 lg:grid-col-3">
      {value?.map((value, ind) => {
        return (
          <div key={ind}>
            <ValueBox />
          </div>
        );
      })}
    </div>
  );
};
export default ValueBoxList;
