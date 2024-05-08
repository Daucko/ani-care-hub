import React from 'react';
import { BackgroundGradient } from '../../components/buypet/BackgroundGradient';
import { Animals } from '../../utils/animalData';
import { useParams } from 'react-router';

export function BuyAPet() {
  const { pet } = useParams();

  return (
    <div className="grid sm:grid-cols-3 justify-center place-content-center gap-36 w-[80vw] mx-auto h-screen">
      {Animals.map((animal) => {
        if (animal.animalType === pet) {
          return (
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <img
                src={animal.image}
                alt={animal.animalType}
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-lg sm:text-xl font-semibold text-[#2D3250] mt-4 mb-2 dark:text-neutral-200">
                {animal.title}
              </p>

              <p className="text-sm text-[#424769] dark:text-neutral-400">
                {animal.description}
              </p>
              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  {animal.price}
                </span>
              </button>
            </BackgroundGradient>
          );
        }
      })}
    </div>
  );
}
