import Image from "next/image";
import React from "react";
import heroImg from "../../assets/hero.png";
const Hero = () => {
  return (
    <div className="w-full px-[120px]">
      <div className="flex justify-between mt-32">
        <div className="w-1/2">
          <h1 className="text-[32px] text-[#313131] font-libre leading-[160%] font-normal letter-spacing-[-0.01em]">
            Where Rhythm Meets Soul: A <br /> Journey Through Classical Dance
          </h1>
          <p className="text-base text-[#6e6e6e] font-normal">
            Discover the elegance of Bharathnatyam and Kathak with Nirupama and
            Rajendra. Since founding the Abhinava Dance Company in 1994, they
            have been illuminating the world stage with the grace and power of
            Indian classical dance. Celebrate the art of movement and
            storytelling with us as we continue to inspire and captivate
            audiences across the globe.
          </p>
        </div>
        <div className="w-1/2">
          <Image src={heroImg} alt="hero" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
