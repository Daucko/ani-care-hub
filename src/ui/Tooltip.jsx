import React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';

const HoverCardUi = ({ icon, content }) => (
  <HoverCard.Root>
    <HoverCard.Trigger asChild>
      <p>{icon}</p>
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content
        className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-full rounded-md bg-white p-2 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
        sideOffset={5}
      >
        <p className="text-[#2D3250] text-sm">{content}</p>

        <HoverCard.Arrow className="fill-white" />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);

export default HoverCardUi;
