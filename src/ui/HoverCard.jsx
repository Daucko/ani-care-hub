import React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';
import { SlCalender } from 'react-icons/sl';

const HoverCardUi = ({ name, image, address }) => (
  <HoverCard.Root>
    <HoverCard.Trigger asChild>
      <p>{name}</p>
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content
        className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-2 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
        sideOffset={5}
      >
        <div className="flex gap-[3px]">
          <img
            className="block object-cover h-[40px] w-[40px] rounded-full"
            src={image}
            alt={name}
          />
          <div className="flex flex-col gap-[15px] font-bold">
            <div className="text-[#2D3250] m-0 text-[12px] font-medium leading-[1.5]">
              {name}
            </div>

            <address className="text-[#2D3250] m-0 text-[12px] font-semibold leading-[1.5]">
              {address}
            </address>
            <div className="text-[12px] text-[#2D3250] font-semibold flex items-center gap-2">
              <SlCalender /> <time datetime="">Joined May 2024</time>
            </div>
          </div>
        </div>

        <HoverCard.Arrow className="fill-white" />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);

export default HoverCardUi;
