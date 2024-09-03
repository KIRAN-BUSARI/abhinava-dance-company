import { ArrowDown } from "lucide-react";
import CarouselComponent from "./CarouselComponent";
import Link from "next/link";

const pics = [
  {
    id: 1,
    image: "assets/hero1.png",
  },
  {
    id: 2,
    image: "assets/Frame 148@1x.png",
  },
  {
    id: 3,
    image: "assets/Frame 151@1x.png",
  },
  {
    id: 4,
    image: "assets/Frame 152@1x.png",
  },
  {
    id: 5,
    image: "assets/Frame 149@1x.png",
  },
  {
    id: 6,
    image: "assets/Frame 147@1x.png",
  },
  {
    id: 7,
    image: "assets/Frame 150@1x.png",
  },
];

function Hero() {
  return (
    <section className="min-h-screen flex justify-center flex-col">
      <div className="md:grid md:grid-cols-2">
        <div className="flex flex-col md:place-content-center font-normal md:text-start text-center mt-5 md:mt-0">
          <h1 className="text-[32px] lg:text-[35px] leading-[140%] mb-2 font-normal font-libre text-[#313131]">
            Where Rhythm Meets Soul: A <br /> Journey Through Classical Dance
          </h1>
          <div className="mb-4">
            <p className="text-[#424242] text-[16px] leading-[160%] font-[24px] font-roboto">
              Discover the elegance of Bharathnatyam and Kathak with <br />{" "}
              Nirupama and Rajendra. Since founding the Abhinava Dance <br />{" "}
              Company in 1994, they have been illuminating the world stage{" "}
              <br /> with the grace and power of Indian classical dance.
              Celebrate <br /> the art of movement and storytelling with us as
              we continue to <br /> inspire and captivate audiences across the
              globe.
            </p>
          </div>
          <div className="flex space-x-4 justify-center lg:justify-start">
            <button className="font-bold md:font-semibold text-[#FFFFFF] bg-[#79348D] px-6 py-2 rounded-lg font-roboto">
              Book Performances
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <CarouselComponent images={pics} />
        </div>
      </div>
      <div className="text-[#79348D] animate-bounce flex justify-center">
        <Link href="/about">{<ArrowDown size={30} />}</Link>
      </div>
    </section>
  );
}

export default Hero;
