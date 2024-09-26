import { ArrowDown } from "lucide-react";
import CarouselComponent from "./CarouselComponent";
import Link from "next/link";

const pics = [
  {
    id: 1,
    image: "/assets/hero1.png",
  },
  {
    id: 2,
    image: "/assets/Frame 148@1x.png",
  },
  {
    id: 3,
    image: "/assets/Frame 151@1x.png",
  },
  {
    id: 4,
    image: "/assets/Frame 152@1x.png",
  },
  {
    id: 5,
    image: "/assets/Frame 149@1x.png",
  },
  {
    id: 6,
    image: "/assets/Frame 147@1x.png",
  },
  {
    id: 7,
    image: "/assets/Frame 150@1x.png",
  },
];

function Hero() {
  return (
    <section className="min-h-screen flex justify-center items-center font-libre">
      <div className="grid grid-cols-12 justify-between">
        <div className="col-span-6 flex flex-col justify-center items-center sm:items-start space-y-5">
          <h1 className="text-balance text-center text-xl font-medium leading-8 tracking-[-1%] text-primary1 sm:mr-24 sm:text-start sm:text-[32px] sm:font-normal sm:leading-[44px]">
            Where Rhythm Meets Soul: A <br /> Journey Through Classical Dance
          </h1>
          <p className="text-base leading-[30px] font-roboto text-balance">
            Discover the elegance of Bharathnatyam and Kathak with Nirupama and
            Rajendra. Since founding the Abhinava Dance Company in 1994, they
            have been illuminating the world stage with the grace and power of
            Indian classical dance. Celebrate the art of movement and
            storytelling with us as we continue to inspire and captivate
            audiences across the globe.
          </p>
          <button className="bg-[#793480] text-white px-6 py-3 rounded-lg">
            Book Perfomances
          </button>
        </div>
        <div className="col-span-6 flex justify-end">
          <CarouselComponent images={pics} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
