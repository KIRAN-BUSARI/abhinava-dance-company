import { motion } from 'framer-motion';
import CarouselComponent from '@/components/CarouselComponent';
import img1 from '@/assets/hero1.png';
import img2 from '@/assets/Frame 148@1x.png';
import img3 from '@/assets/Frame 151@1x.png';
import img4 from '@/assets/Frame 152@1x.png';
import img5 from '@/assets/Frame 149@1x.png';
import img6 from '@/assets/Frame 147@1x.png';
import img7 from '@/assets/Frame 150@1x.png';

const pics = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img5 },
  { id: 6, image: img6 },
  { id: 7, image: img7 },
];

function Hero() {
  return (
    <section className="font-libre mx-auto flex min-h-[85vh] w-full items-center justify-center gap-8">
      <div className="flex w-full grid-cols-1 flex-col-reverse items-center sm:grid sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col items-center space-y-5 sm:col-span-6 sm:mt-0 sm:items-start"
        >
          <h1 className="text-center text-xl font-medium leading-8 tracking-[-1%] text-primary1 dark:text-white sm:text-left sm:text-[32px] sm:leading-[44px]">
            Where Rhythm Meets Soul: <br /> A Journey Through Classical Dance
          </h1>
          <p className="text-center text-base font-normal leading-[30px] sm:text-left sm:text-lg">
            Discover the elegance of Bharathnatyam and Kathak with Nirupama and
            Rajendra. Since founding the Abhinava Dance Company in 1994, they
            have been illuminating the world stage with the grace and power of
            Indian classical dance.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="rounded-lg bg-[#793480] px-6 py-3 text-white"
          >
            Book Performances
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex justify-center sm:col-span-6 sm:mt-0 sm:justify-end"
        >
          <CarouselComponent images={pics} />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
