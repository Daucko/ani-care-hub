import { FollowerPointerCard } from './FollowingPointer';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { sponsoredVets } from '../../utils/dummyData';

export function DoctorCard() {
  return (
    <div className="grid sm:grid-cols-3 gap-8 max-w-[80vw] mx-auto">
      {sponsoredVets.map((vet) => {
        return (
          <FollowerPointerCard
            title={<TitleComponent title={vet.name} avatar={vet.image} />}
          >
            <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100 w-80">
              <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                <img
                  src={vet.image}
                  alt="thumbnail"
                  className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
                />
              </div>
              <div className=" p-4">
                <h2 className="font-bold text-center my-4 text-lg text-[#2D3250]">
                  {vet.name}
                </h2>
                <h2 className="font-bold text-center my-4 text-lg text-[#2D3250]">
                  Veterinarian
                </h2>
                <h2 className="font-normal my-4 text-sm text-center  text-[#2D3250]">
                  {vet.bio}
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
        );
      })}
    </div>
  );
}

const TitleComponent = ({ title, avatar }) => (
  <div className="flex space-x-2 items-center">
    <img
      src={avatar}
      alt="thumbnail"
      className="rounded-full w-5 h-5 object-cover border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
