import React, {useEffect, useState} from 'react';
import { BackgroundGradient } from '../../components/buypet/BackgroundGradient';
import { Vets } from '../../utils/dummyData';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export function VetPage() {
  const[vets, setVets] = useState()
  // const { pet } = useParams();

  useEffect(()=> {
    fetch("https://ani-care-hub.onrender.com/api/doctors")
    .then((response) => response.json())
    .then((data) => {
      setVets(data.doctors)
    }).catch(error => console.error('Error:', error))
  }, [])

  return (
    <main className="dark:bg-black">
      <div className="grid sm:grid-cols-3 justify-center place-content-center gap-16 w-[80vw] mx-auto py-20">
        {vets ? vets.map((vet) => {
          return (
            <BackgroundGradient
              className="rounded-[22px] max-w-sm p-4 sm:p-10 min-h-full bg-white dark:bg-zinc-900"
              key={vet.id}
            >
              <img
                src={vet.image}
                alt={vet.name}
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-lg sm:text-xl font-semibold text-[#2D3250] mt-4 mb-2 dark:text-neutral-200">
                {vet.name}
              </p>

              <p className="text-sm text-[#424769] dark:text-neutral-400">
                {vet.bio}
              </p>
              <Link
                to="/"
                className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-[#2D3250] mt-4 text-sm font-bold dark:bg-zinc-800"
              >
                <span>VCN </span>
                <span className="bg-[#7077A1] rounded-full text-[1rem] px-2 py-0 text-[#2D3250]">
                  {vet.vcn}
                </span>
              </Link>

              <div className="mt-3 block">
                <em className="font-semibold dark:text-[#7077A1]">
                  Want my service?
                </em>{' '}
                <Link
                  to={`/vets/${vet.id}`}
                  className="bg-[#F6B17A] rounded-full font-bold text-[0.8rem] px-2 py-1 text-[#2D3250]"
                >
                  Contact me
                </Link>
              </div>
            </BackgroundGradient>
          );
        }  ) : null}
      </div>
    </main>
  );
}
