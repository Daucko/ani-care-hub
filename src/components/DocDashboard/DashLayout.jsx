import { Outlet } from 'react-router';
import DashNav from './DashNav';
import { GoArrowRight } from 'react-icons/go';
import { useParams } from 'react-router';
import { Vets } from '../../utils/dummyData';
import DashHome from './DashHome';

const DashLayout = () => {
  const { vetId } = useParams();

  const doc = Vets.find((vet) => vet.id == vetId);

  const { name } = doc;

  return (
    <main className="flex">
      {/* <DashNav /> */}
      {/* <Outlet name={name} /> */}
      {/* <DashHome name={home} /> */}
      <h4>{vetId}</h4>
    </main>
  );
};
export default DashLayout;
