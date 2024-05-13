import { cn } from '../../utils/cn';

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-4 gap-6 max-w-[95vw] mx-auto ',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border  justify-between flex flex-col space-y-4 h-[28rem]',
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 text-[#2D3250] transition duration-200">
        {icon}
        <div className="text-xl font-sans font-bold text-[#2D3250] dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="text-[15px] font-sans font-normal text-[#2D3250] dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
