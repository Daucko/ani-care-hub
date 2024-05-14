import React, { useState } from 'react';
import { HoveredLink, Menu, MenuItem, ProductItem } from './NavBarMenu';
import { cn } from '../../utils/cn';
import { IoSearch } from 'react-icons/io5';
import { FaArrowRight } from 'react-icons/fa';
import { RiMenuFill } from 'react-icons/ri';
import { TbX } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { Vets } from '../../utils/dummyData';

export function HomeNav({ onSearchClick }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleSmallScreenMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  return (
    <div>
      <div className="relative w-full flex items-center justify-between px-5 sm:px-20">
        <Link to="/" className="">
          <img
            src="/favicon.ico"
            alt=""
            className="w-12 sm:w-32 h-10 sm:h-24 object-cover"
          />
        </Link>
        <div className="w-1/2 hidden sm:flex items-center justify-between">
          <Navbar className="" />
          <div className="cursor-pointer" onClick={onSearchClick}>
            <IoSearch className="w-5 h-5 cursor-pointer" />
          </div>
          <span className=" w-[2px] h-10 mx-3 bg-gray-200"></span>
          <Link
            to="/register-service"
            className="bg-[#F6B17A] text-[#2D3250] text-[15px] font-semibold leading-6 rounded-full p-3 dark:text-white"
          >
            Register a Service
          </Link>
          <Link
            to="/sign-in"
            className="text-[15px] text-[#2D3250] font-semibold cursor-pointer"
          >
            Sign in <FaArrowRight className="w-3 h-3 inline-block" />
          </Link>
        </div>
        <div
          className="absolute block sm:hidden top-0 right-5 "
          onClick={toggleSmallScreenMenu}
        >
          <RiMenuFill className="h-10 w-10" />
        </div>
      </div>
      {showMenu && (
        <div className="relative bg-white  -top-16 left-0 w-[100vw] h-[100vh] flex-col sm:hidden justify-center space-y-8">
          <Navbar className="" />
          <div
            className="cursor-pointer ml-[47%] block"
            onClick={onSearchClick}
          >
            <IoSearch className="w-6 h-6 cursor-pointer" />
          </div>
          <Link
            to="/register-service"
            className="block my-4 bg-[#F6B17A] text-[#2D3250] text-[15px] font-semibold leading-6 rounded-full p-3 w-max dark:text-white mx-auto"
          >
            Register a Service
          </Link>
          <Link
            to="/sign-in"
            className="text-md text-[#2D3250] font-semibold cursor-pointer block ml-[42%]"
          >
            Sign in <FaArrowRight className="w-3 h-3 inline-block" />
          </Link>
          <div
            className="absolute text-2xl -top-4 right-2 block sm:hidden "
            onClick={toggleSmallScreenMenu}
          >
            <TbX className="" />
          </div>
        </div>
      )}
    </div>
  );
}

function Navbar({ className, pet }) {
  const [active, setActive] = useState(null);

  return (
    <div className={cn('z-50', className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Doctors">
          <div className="flex flex-col space-y-4 text-sm">
            {Vets.map((vet) => {
              return (
                <HoveredLink href="/vets" key={vet.id}>
                  {vet.name}
                </HoveredLink>
              );
            })}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Service">
          <div className="  text-sm grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 p-4">
            <ProductItem
              title="Veterinarian"
              href="/vets"
              src="/images/image6.jpeg"
              description="A vet basically treats and care for animals."
            />
            <ProductItem
              title="Dog School"
              href="/dog-school"
              src="/images/image9.jpg"
              description="Let your dogs receive training and behavioural guidance"
            />
            <ProductItem
              title="Dog Boarding Facility"
              href="/dog-boarding"
              src="/images/image.png"
              description="Let your dog be well taken care of while you are away."
            />
            <ProductItem
              title="Dog Sale"
              href="/dog"
              src="/images/image1.jpeg"
              description="Sell those cute puppies."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Buy a Pet">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to={`/dog`}>Dog</HoveredLink>
            <HoveredLink to={`/cat`}>Cat</HoveredLink>
            {/* <HoveredLink href="/team">Team</HoveredLink> */}
            {/* <HoveredLink href="/enterprise">Enterprise</HoveredLink> */}
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
