import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src={"/assets/logo.svg"}
      alt="logo"
      width={100}
      height={100}
      className="h-10 w-10"
    />
  );
};

export default Logo;
