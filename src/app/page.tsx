import Banner from "@/components/Banner";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="h-screen">
      <Banner />
      <div className="mx-[120px]">
        <Hero />
      </div>
    </div>
  );
}
