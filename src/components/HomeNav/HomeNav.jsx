import React, { useState } from 'react';
import { HoveredLink, Menu, MenuItem, ProductItem } from './NavBarMenu';
import { cn } from '../../utils/cn';
import { IoSearch } from 'react-icons/io5';
import { FaArrowRight } from 'react-icons/fa';
import { RiMenuFill } from 'react-icons/ri';
import { TbX } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { Vets } from '../../utils/dummyData';
import SearchComp from '../../pages/SearchComp/SearchComp';
import { HiMiniXMark } from 'react-icons/hi2';
import { FiSearch } from 'react-icons/fi';

export function HomeNav({ onSearchClick }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleSmallScreenMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  return (
    <div>
      <div className="relative w-full flex items-center justify-between px-4 lg:px-20 dark:bg-black">
        <Link to="/" className="">
          <img
            src="/images/anicarehub-logo.jpg"
            alt=""
            className="w-12 lg:w-[7.5rem] h-9 lg:h-24 object-cover"
          />
        </Link>
        <Navbar className="block lg:hidden" />
        <div className=" block lg:hidden  " onClick={toggleSmallScreenMenu}>
          <RiMenuFill className="h-10 w-10 dark:text-[#7E8EF1]" />
        </div>
        <div className="w-1/2 hidden lg:flex items-center justify-center gap-2">
          <Navbar className="" />

          <SearchComp />
          <span className=" w-[2px] h-10 mx-3 bg-gray-200"></span>
          <div className="flex items-center gap-2">
            <Link
              to="/about-us"
              className="text-[#2D3250] font-semibold dark:text-[#7E8EF1]"
            >
              About Us
            </Link>
            <Link
              to="/register-service"
              className="bg-[#F6B17A] text-[#2D3250] text-[0.938rem] font-semibold leading-6 rounded-full p-3 dark:text-white"
            >
              Register a Service
            </Link>
          </div>
          <Link
            to="/sign-in"
            className="text-[0.938rem] text-[#2D3250] font-semibold cursor-pointer dark:text-[#7E8EF1]"
          >
            Sign in{' '}
            <FaArrowRight className="w-3 h-3 inline-block dark:text-[#7E8EF1]" />
          </Link>
          <Link></Link>
        </div>
      </div>
      {showMenu && (
        <div className="relative bg-white  top-6 left-0 w-full h-full flex-col lg:hidden justify-center items-center space-y-4 p-5">
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <span className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 pt-2">
              <FiSearch className="text-gray-500" />
            </span>
            <input
              type="text"
              placeholder="Placeholder"
              className="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pl-10"
            />
          </div>
          <Link
            to="/register-service"
            className="block my-4 ml-0 bg-[#F6B17A] text-[#2D3250] text-[0.938rem] font-semibold leading-6 rounded-full p-3 w-max dark:text-white"
          >
            Register a Service
          </Link>
          <Link
            to="/sign-in"
            className="text-md text-[#2D3250] font-semibold cursor-pointer block ml-0"
          >
            Sign in <FaArrowRight className="w-3 h-3 inline-block" />
          </Link>
          <div
            className="absolute text-2xl -top-7 right-2 block lg:hidden "
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
        <MenuItem setActive={setActive} active={active} item="Service">
          <div className="  text-sm grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 p-4">
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
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
