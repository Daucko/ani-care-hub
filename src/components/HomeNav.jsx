import React, { useState } from 'react';
import { HoveredLink, Menu, MenuItem, ProductItem } from '../ui/NavBarMenu';
import { cn } from '../utils/cn';
import { IoSearch } from 'react-icons/io5';
import { FaArrowRight } from 'react-icons/fa';
import SearchModal from './SearchModal';

// import classes from './HomeNav.module.css'

export function HomeNav({ onSearchClick }) {
  //   const [popSearchModal, setPopSearchModal] = useState(false);

  //   const handleSearchModal = () => {
  //     setPopSearchModal(true);
  //     onSearchClick = true;
  //   };

  return (
    <div className="relative w-full flex items-center justify-between px-20">
      <div className="cursor-pointer flex items-center justify-center space-x-2">
        <img src="/favicon.ico" alt="" />
        <h1 className="text-xl font-semibold text-[#2D3250]">AniCareHub</h1>
      </div>
      <div className="w-1/2 flex items-center justify-between">
        <Navbar className="" />
        <div className="cursor-pointer" onClick={onSearchClick}>
          <IoSearch className="w-10 h-10 cursor-pointer" />
          
        </div>
        <span className=" w-[2px] h-10 mx-3 bg-gray-200"></span>
        <button className="bg-[#F6B17A] text-[#2D3250] text-[20px] font-semibold leading-6 rounded-full p-3 dark:text-white">
          Register a Service
        </button>
        <span className="text-xl text-[#2D3250] font-semibold cursor-pointer">
          Sign in <FaArrowRight className="w-5 h-5 inline-block" />
        </span>
      </div>
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div className={cn('z-50', className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Doctors">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Service">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
