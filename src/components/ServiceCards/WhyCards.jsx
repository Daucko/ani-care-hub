// import { cn } from '../utils/cn';
import React from 'react';
import PicsSlideShow from './PicsSlideShow';
import { BentoGrid, BentoGridItem } from './BentoGrid';

import { BsQuestionOctagon } from 'react-icons/bs';
import { GiJumpingDog } from 'react-icons/gi';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { BsHouses } from 'react-icons/bs';

export function BentoGridDemo() {
  return (
    <BentoGrid className="w-full">
      {items.map((item, i) => (
        <BentoGridItem
          key={item.id}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          href={item.href}
          className={i === 4 ? ' md:col-span-2' : ''}
        />
      ))}
    </BentoGrid>
  );
}
const AllPics = () => (
  <div className="flex flex-1 w-full min-h-[12rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 ">
    <PicsSlideShow />
  </div>
);
const VetPic = () => (
  <div className="flex flex-1 w-full min-h-[12rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img
      src="/images/image5.jpeg"
      alt=""
      className="object-cover w-full rounded-xl"
    />
  </div>
);
const BoardingPic = () => (
  <div className="flex flex-1 w-full min-h-[12rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img
      src="/images/image14.jpg"
      alt=""
      className="object-cover w-full rounded-xl"
    />
  </div>
);
const School = () => (
  <div className="flex flex-1 w-full min-h-[12rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img
      src="/images/image9.jpg"
      alt=""
      className="object-cover w-full rounded-xl"
    />
  </div>
);
const items = [
  {
    id: 1,
    title: 'Why Use AniCare Hub?',
    description: 'Paws & Purpose: Where Every Tail Wag Counts!',
    header: <AllPics />,
    icon: <BsQuestionOctagon className="h-5 w-5 text-[#2D3250]" />,
    href: '/about-us',
  },
  {
    id: 2,
    title: 'The Dog Schools',
    description: 'Pawsitive Progress: Where Every Dog Finds Their Wag!.',
    header: <School />,
    icon: <GiJumpingDog className="h-5 w-5 text-[#2D3250]" />,

    href: '/dog-school',
  },
  {
    id: 3,
    title: 'The Art of Care',
    description: 'Bark & Board: Where Every Tail Wags! And are secured.',
    header: <BoardingPic />,
    icon: <BsHouses className="h-5 w-5 text-[#2D3250]" />,
    href: '/dog-boarding',
  },
  {
    id: 4,
    title: 'Animal Health Concerns',
    description: 'Compassionate Care: Where Healing Meets Heart.',
    header: <VetPic />,
    icon: <MdOutlineHealthAndSafety className="h-5 w-5 text-[#2D3250]" />,
    href: '/vets',
  },
];
