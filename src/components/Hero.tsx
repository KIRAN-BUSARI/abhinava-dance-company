"use client";

import { motion } from "framer-motion";
import CarouselComponent from "./CarouselComponent";

const pics = [
  { id: 1, image: "/assets/hero1.png" },
  { id: 2, image: "/assets/Frame 148@1x.png" },
  { id: 3, image: "/assets/Frame 151@1x.png" },
  { id: 4, image: "/assets/Frame 152@1x.png" },
  { id: 5, image: "/assets/Frame 149@1x.png" },
  { id: 6, image: "/assets/Frame 147@1x.png" },
  { id: 7, image: "/assets/Frame 150@1x.png" },
];

function Hero() {
  return (
    <section className="h-[85vh] flex flex-col justify-center items-center font-libre px-4 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="sm:col-span-6 flex flex-col items-center sm:items-start space-y-5"
        >
          <h1 className="text-center sm:text-left text-xl sm:text-[32px] font-medium leading-8 sm:leading-[44px] tracking-[-1%] text-primary1">
            Where Rhythm Meets Soul: <br /> A Journey Through Classical Dance
          </h1>
          <p className="text-base sm:text-lg text-center sm:text-left leading-[30px] font-roboto">
            Discover the elegance of Bharathnatyam and Kathak with Nirupama and
            Rajendra. Since founding the Abhinava Dance Company in 1994, they
            have been illuminating the world stage with the grace and power of
            Indian classical dance.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#793480] text-white px-6 py-3 rounded-lg"
          >
            Book Performances
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="sm:col-span-6 flex justify-center sm:justify-end"
        >
          <CarouselComponent images={pics} />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
