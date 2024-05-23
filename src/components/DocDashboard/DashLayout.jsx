import { Outlet } from 'react-router';
import DashNav from './DashNav';
import { GoArrowRight } from 'react-icons/go';
import { useParams } from 'react-router';
import { Vets } from '../../utils/dummyData';
import DashHome from './DashHome';
import { useEffect } from 'react';

const DashLayout = () => {
  const { vetId } = useParams();

  // console.log(useParams());

  const doc = Vets.find((vet) => vet.id == vetId);

  const { name, id } = doc;

  return (
    <main className=" flex w-[90vw] mx-auto border-2 border-red-500 ">
      <section className="bg-[#7077A1] ps-24 rounded-tl-[30px]">
        <section className="bg-white w-[120px] flex justify-center items-center min-h-screen ">
          <DashNav name={name} id={id} />
        </section>
      </section>
      <section>
        <h1>Hi</h1>
        {/* <DashHome /> */}
      </section>
    </main>
  );
};
export default DashLayout;
