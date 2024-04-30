// import Image from 'next/image';
import { FollowerPointerCard } from '../ui/FollowingPointer';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export function DoctorCard() {
  return (
    <div className="w-80 mx-auto">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={blogContent.authorAvatar}
          />
        }
      >
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            <img
              src="/images/image6.jpeg"
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
            />
          </div>
          <div className=" p-4">
            <h2 className="font-bold text-center my-4 text-lg text-[#2D3250]">
              {blogContent.author}
            </h2>
            <h2 className="font-bold text-center my-4 text-lg text-[#2D3250]">
              {blogContent.title}
            </h2>
            <h2 className="font-normal my-4 text-sm text-[#2D3250]">
              {blogContent.bio}
            </h2>
            <div className="flex justify-center items-center gap-x-5 mt-10">
              <Link className="bg-[#7077A1]/30 p-3 rounded-full">
                <BsTwitterX className="h-5 w-5" />
              </Link>
              <Link className="bg-[#7077A1]/30 p-3 rounded-full">
                <FaFacebookF className="h-5 w-5" />
              </Link>
              <Link className="bg-[#7077A1]/30 p-3 rounded-full">
                <BsInstagram className="h-5 w-5" />
              </Link>
              <Link className="bg-[#7077A1]/30 p-3 rounded-full">
                <FaLinkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

const blogContent = {
  slug: 'amazing-tailwindcss-grid-layouts',
  author: 'Olisa Macauley',
  date: '28th March, 2023',
  title: 'Veterinarian',
  bio: 'Dr. Olisa Macauley is a passionate and dedicated veterinarian with a deep love for animals and a commitment to their well-being.',
  image: '/demo/thumbnail.png',
  authorAvatar: '/manu.png',
};

const TitleComponent = ({ title, avatar }) => (
  <div className="flex space-x-2 items-center">
    <img
      src="images/image6.jpeg"
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
