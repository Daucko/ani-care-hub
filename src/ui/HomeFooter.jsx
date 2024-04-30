import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const HomeFooter = () => {
  return (
    <main>
      <section className="flex items-center justify-between bg-[#7077A1] px-20 py-10">
        <p className="text-white">&copy; Copyright. All rights reserved.</p>
        <div className="flex justify-center items-center gap-x-5 mt-10">
          <Link className="bg-[#2D3250] p-3 rounded-full">
            <BsTwitterX className="h-5 w-5 text-white" />
          </Link>
          <Link className="bg-[#2D3250] p-3 rounded-full">
            <FaFacebookF className="h-5 w-5 text-white" />
          </Link>
          <Link className="bg-[#2D3250] p-3 rounded-full">
            <BsInstagram className="h-5 w-5 text-white" />
          </Link>
          <Link className="bg-[#2D3250] p-3 rounded-full">
            <FaLinkedin className="h-5 w-5 text-white" />
          </Link>
        </div>
      </section>
    </main>
  );
};
export default HomeFooter;
