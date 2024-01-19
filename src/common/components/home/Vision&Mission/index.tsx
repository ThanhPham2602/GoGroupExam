import { error } from "console";
import React from "react";

const VisionMission: React.FC = async ({}) => {
  const getData = async () => {
    const res = await getVisionMissionData();

    const { body } = res;

    if (body?.status === "OK") {
      return body.data;
    } else {
      console.log(error);
    }
  };
  const VisionMission = await getData();

  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="flex-1">123</div>
      <div className="flex-1">456</div>
    </div>
  );
};

export default VisionMission;
