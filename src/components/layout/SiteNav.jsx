import { Outlet, useNavigate, useParams } from 'react-router';
import { HomeNav } from '../HomeNav/HomeNav';
import HomeFooter from './HomeFooter';
import Switcher from '../../ui/Switcher';

const SiteNav = () => {
  const navigate = useNavigate();

  const { pet } = useParams();

  const onSearchClick = () => {
    navigate('/search');
  };

  return (
    <main>
      <nav className="py-3 border-solid border-b-2 sticky top-0 bg-white/80 z-50 dark:bg-black">
        <HomeNav onSearchClick={onSearchClick} pet={pet} />
        <Switcher />
      </nav>
      <Outlet className="dark:bg-black" />
      <HomeFooter />
    </main>
  );
};
export default SiteNav;
