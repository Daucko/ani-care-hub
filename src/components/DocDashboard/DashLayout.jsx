import { Outlet } from 'react-router';
import DashNav from './DashNav';
import { GoArrowRight } from 'react-icons/go';
import { useParams } from 'react-router';
import { Vets } from '../../utils/dummyData';
import DashHome from './DashHome';
import { useEffect } from 'react';
import { RadialBackground } from '../layout/RadialBackground';

const DashLayout = () => {
  const { vetId } = useParams();

  // console.log(useParams());

  const doc = Vets.find((vet) => vet.id == vetId);

  const { name, id, image } = doc;

  return (
    <main className=" flex w-[90vw] mx-auto border-r-2 ">
      <section className="bg-[#7077A1] ps-24 rounded-tl-[30px] border-r-2 border-gray-200/90">
        <section className="bg-white w-[120px] flex justify-center items-center h-full ">
          <DashNav name={name} id={id} />
        </section>
      </section>
      <section>
        <RadialBackground name={name} image={image} />
      </section>
    </main>
  );
};
export default DashLayout;
