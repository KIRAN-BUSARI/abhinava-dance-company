import Link from "next/link";

const Banner = () => {
  return (
    <div className="w-full bg-[#79348D] py-2">
      <div className="flex justify-center">
        <p className="text-[#FFE493] text-sm">
          Kathak by Nirupama & Rajendra & Abhinava Dance Company An NCPA
          Presentation.{" "}
          <span className="cursor-pointer underline underline-offset-2">
            {" "}
            <Link
              href={
                "https://www.ncpamumbai.com/event/ncpa-nakshatra-dance-festival-2024-day-3/"
              }
              target="_blank"
            >
              {" "}
              Click here
            </Link>
          </span>{" "}
          to Book your tickets now!
        </p>
      </div>
    </div>
  );
};

export default Banner;
