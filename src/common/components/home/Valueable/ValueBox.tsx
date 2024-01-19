import React from "react";

type ValueBoxProps = {
  icon: string;
  title: string;
  content: string;
};

const ValueBox: React.FC<ValueBoxProps> = ({ icon, title, content }) => {
  return (
    <div className="flex p-10 text-white bg-buttonColor border  border-white">
      <div>{icon}</div>
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
};

export default ValueBox;
