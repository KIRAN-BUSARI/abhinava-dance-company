import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="hidden w-full bg-[#79348D] py-2 text-center sm:block px-4">
      <div className="flex justify-center">
        <p className="text-sm text-[#FFE493]">
          Kathak by Nirupama & Rajendra & Abhinava Dance Company An NCPA
          Presentation.{' '}
          <span className="cursor-pointer underline underline-offset-2">
            {' '}
            <Link
              to={
                'https://www.ncpamumbai.com/event/ncpa-nakshatra-dance-festival-2024-day-3/'
              }
              target="_blank"
            >
              {' '}
              Click here
            </Link>
          </span>{' '}
          to Book your tickets now!
        </p>
      </div>
    </div>
  );
};

export default Banner;
