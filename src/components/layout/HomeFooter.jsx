import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const HomeFooter = () => {
  return (
    <main className="border-t-1 border-[#2D3250] dark:border-blue-500">
      <section className="flex flex-col sm:flex-row items-center justify-center sm:justify-between bg-[#7077A1] px-auto sm:px-20 py-10 dark:bg-black">
        <p className="text-white text-[12px] sm:text-[15px]">
          &copy; Copyright. All rights reserved.
        </p>
        <div className="flex justify-center gap-x-5 mt-5 sm:mt-0">
          <Link className="bg-[#2D3250] p-2 rounded-full">
            <BsTwitterX className="h-5 w-5 text-white" />
          </Link>
          <Link className="bg-[#2D3250] p-2 rounded-full">
            <FaFacebookF className="h-5 w-5 text-white" />
          </Link>
          <Link className="bg-[#2D3250] p-2 rounded-full">
            <BsInstagram className="h-5 w-5 text-white" />
          </Link>
          <Link className="bg-[#2D3250] p-2 rounded-full">
            <FaLinkedin className="h-5 w-5 text-white" />
          </Link>
        </div>
      </section>
    </main>
  );
};
export default HomeFooter;
