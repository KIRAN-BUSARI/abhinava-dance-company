import Banner from "@/Components/Banner";
import Hero from "@/Components/Hero";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <Banner />
        <div className="mx-[120px]">
          <Hero />
        </div>
      </div>
    </>
  );
}
