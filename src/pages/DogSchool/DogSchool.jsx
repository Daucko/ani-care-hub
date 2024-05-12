import React from 'react';
import { WobbleCard } from './WobbleCard';
import { Link } from 'react-router-dom';
import { dogSchools } from '../../utils/dummyData';

export function DogSchool() {
  return (
    <main className="bg-[#7077A1] ">
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full pb-20 pt-40 ">
        <h1 className="absolute top-[4%]  left-20 sm:left-[30%] font-bold text-[20px] sm:text-[45px] text-[#2D3250]">
          Fetch success for your pup!
        </h1>
        {dogSchools.map((school) => {
          return (
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
              href="/register-service"
              key={school.id}
            >
              <div className="max-w-sm">
                <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-sm md:text-base lg:text-xl font-semibold tracking-[-0.015em] text-white">
                  <span className="text-[#2D3250] bg-[#F6B17A] p-2 rounded-md">
                    {school.name}
                  </span>{' '}
                  <br />
                  <br />
                  {school.advertText}
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                  {school.motto}
                </p>
              </div>
              <img
                src={school.image}
                width={500}
                height={500}
                alt={school.name}
                className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
              />
            </WobbleCard>
          );
        })}
      </div>
    </main>
  );
}
