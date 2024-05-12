import React from 'react';
import { BackgroundGradient } from '../../components/buypet/BackgroundGradient';
import { Animals } from '../../utils/dummyData';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export function BuyAPet() {
  const { pet } = useParams();

  return (
    <div className="grid sm:grid-cols-3 justify-center place-content-center gap-16 w-[80vw] mx-auto py-20">
      {Animals.map((animal) => {
        if (animal.animalType === pet) {
          return (
            <BackgroundGradient
              className="rounded-[22px] max-w-sm min-h-full p-4 sm:p-6 bg-white dark:bg-zinc-900"
              key={animal.id}
            >
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
              <Link
                to="/"
                className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-[#2D3250] mt-4 text-sm font-bold dark:bg-zinc-800"
              >
                <span>Buy now </span>
                <span className="bg-[#F6B17A] rounded-full text-[1rem] px-2 py-0 text-[#2D3250]">
                  {animal.price}
                </span>
              </Link>
              <Link
                to="/"
                className="text-base font-bold text-[#2D3250] mt-3 block"
              >
                Seller: {animal.seller}
              </Link>
            </BackgroundGradient>
          );
        }
      })}
    </div>
  );
}
