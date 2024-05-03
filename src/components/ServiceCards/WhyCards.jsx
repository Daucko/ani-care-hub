// import { cn } from '../utils/cn';
import React from 'react';
import PicsSlideShow from './PicsSlideShow';
import { BentoGrid, BentoGridItem } from './BentoGrid';
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react';

export function BentoGridDemo() {
  return (
    <BentoGrid className="w-full">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 4 ? ' md:col-span-2' : ''}
        />
      ))}
    </BentoGrid>
  );
}
const AllPics = () => (
  <div className="flex flex-1 w-full h-full min-h-[15rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 ">
    <PicsSlideShow />
  </div>
);
const VetPic = () => (
  <div className="flex flex-1 w-full h-full min-h-[15rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img
      src="/images/image5.jpeg"
      alt=""
      className="object-cover w-full rounded-xl"
    />
  </div>
);
const BoardingPic = () => (
  <div className="flex flex-1 w-full h-full min-h-[15rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img
      src="/images/image2.jpeg"
      alt=""
      className="object-cover w-full rounded-xl"
    />
  </div>
);
const School = () => (
  <div className="flex flex-1 w-full h-full min-h-[15rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img
      src="/images/image5.jpg"
      alt=""
      className="object-cover w-full rounded-xl"
    />
  </div>
);
const items = [
  {
    title: 'Why Use AniCare Hub?',
    description: 'Explore the birth of groundbreaking ideas.',
    header: <AllPics />,
    icon: <IconClipboardCopy className="h-5 w-5 text-neutral-500" />,
  },
  {
    title: 'The Dog Schools',
    description: 'Dive into the transformative power of technology.',
    header: <School />,
    icon: <IconFileBroken className="h-5 w-5 text-neutral-500" />,
  },
  {
    title: 'The Art of Care',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <BoardingPic />,
    icon: <IconSignature className="h-5 w-5 text-neutral-500" />,
  },
  {
    title: 'Animal Health Concerns',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <VetPic />,
    icon: <IconTableColumn className="h-5 w-5 text-neutral-500" />,
  },
  //   {
  //     title: 'The Pursuit of Knowledge',
  //     description: 'Join the quest for understanding and enlightenment.',
  //     header: <Skeleton />,
  //     icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  //   },
  //   {
  //     title: 'The Joy of Creation',
  //     description: 'Experience the thrill of bringing ideas to life.',
  //     header: <Skeleton />,
  //     icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  //   },
  //   {
  //     title: 'The Spirit of Adventure',
  //     description: 'Embark on exciting journeys and thrilling discoveries.',
  //     header: <Skeleton />,
  //     icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  //   },
];
