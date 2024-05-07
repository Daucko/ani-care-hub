import React from 'react';
import { BackgroundGradient } from '../../components/buypet/BackgroundGradient';

export function BuyAPet() {
  return (
    <div className="grid sm:grid-cols-3 justify-center place-content-center gap-36 w-[80vw] mx-auto h-screen">
      <div className="w">
        <BackgroundGradient className=" rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <img
            src="images/image18.jpg"
            alt="dog"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-lg sm:text-xl font-semibold text-[#2D3250] mt-4 mb-2 dark:text-neutral-200">
            A Rottweiler.
          </p>

          <p className="text-sm text-[#424769] dark:text-neutral-400">
            A Rottweiler is a powerful and confident breed known for its
            muscular build, distinctive black and tan markings, and loyal,
            protective nature.
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              #50,000
            </span>
          </button>
        </BackgroundGradient>
      </div>

      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <img
          src="images/image17.jpg"
          alt="dog"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-lg sm:text-xl font-semibold text-[#2D3250] mt-4 mb-2 dark:text-neutral-200">
          A Puggle.
        </p>

        <p className="text-sm text-[#424769] dark:text-neutral-400">
          A Puggle is an adorable small to medium-sized dog breed, a cross
          between a Pug and a Beagle, known for its playful demeanor and
          affectionate personality.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            #50,000
          </span>
        </button>
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <img
          src="images/image14.jpg"
          alt="dog"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-lg sm:text-xl font-semibold text-[#2D3250] mt-4 mb-2 dark:text-neutral-200">
          A Shiba Inu.
        </p>

        <p className="text-sm text-[#424769] dark:text-neutral-400">
          A Shiba Inu is a spirited and independent breed originating from
          Japan, characterized by its fox-like appearance, confident demeanor,
          and distinctive curled tail.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            #50,000
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
