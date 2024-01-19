import React, { ReactNode } from "react";

const CoverImage: React.FC<{
  src?: string;
  children?: ReactNode;
}> = ({ children, src }) => {
  return (
    <>
      <div
        className=" w-full h-full pt-[68px] relative z-11 max-md:hidden"
        style={{
          backgroundImage: `url(${src})`,
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <video
          playsInline
          width={"100%"}
          height={"100%"}
          autoPlay
          muted
          loop
          className="object-cover h-full border-none outline-none"
          preload="none"
        >
          {/* <source src="polina.webm" type="video/webm"></source> */}
          <source
            src="https://gogroup.vn/wp-content/uploads/2023/04/background-1.webm"
            type="video/mp4"
          ></source>
        </video>

        {children}
      </div>
    </>
  );
};

export default CoverImage;
