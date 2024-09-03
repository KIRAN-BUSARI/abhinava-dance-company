import { ArrowDown } from "lucide-react"
import CarouselComponent from "./CarouselComponent"

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
]

function Hero() {
    return (
        <section className="min-h-screen flex justify-center flex-col">
            <div className="md:grid md:grid-cols-2">
                <div className="flex flex-col md:place-content-center space-y-4 font-normal md:text-start text-center mt-5 md:mt-0">
                    <h1 className="text-3xl lg:text-[35px] leading-[140%] font-normal font-libre">Where Rhythm Meets Soul: A <br /> Journey Through Classical Dance
                    </h1>
                    <div>
                        <p className="text-[#1B1B1E] text-[16px] leading-[160%] font-[24px]">Discover the elegance of Bharathnatyam and Kathak with <br /> Nirupama and Rajendra. Since founding the Abhinava Dance <br /> Company in 1994, they have been illuminating the world stage <br /> with the grace and power of Indian classical dance. Celebrate <br /> the art of movement and storytelling with us as we continue to <br /> inspire and captivate audiences across the globe.</p>
                    </div>
                    <div className="flex space-x-4 justify-center lg:justify-start">
                        <button className="font-bold md:font-semibold text-[#FFFFFF] bg-[#79348D] px-6 py-2 rounded-lg">Book Performances</button>
                    </div>
                </div>
                <div className="flex justify-end">
                    <CarouselComponent images={pics} />
                </div>
            </div>
            <div className="text-[#79348D] animate-bounce flex justify-center">
                <button>
                    {<ArrowDown size={30} />}
                </button>
            </div>
        </section>
    )
}

export default Hero