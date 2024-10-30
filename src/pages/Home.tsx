import Hero from './Hero';
import Banner from '@/components/Banner';

export default function Home() {
  return (
    <>
      <Banner />
      <div className="px-4 md:px-[120px]">
        <Hero />
      </div>
    </>
  );
}
