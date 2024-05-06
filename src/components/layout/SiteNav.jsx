import { Outlet, useNavigate } from 'react-router';
import { HomeNav } from '../HomeNav/HomeNav';
import HomeFooter from './HomeFooter';

const SiteNav = () => {
  const navigate = useNavigate();

  const onSearchClick = () => {
    navigate('/search');
  };

  return (
    <main>
      <nav className="py-5 border-solid border-b-2 sticky top-0 bg-white/80 z-50">
        <HomeNav onSearchClick={onSearchClick} />
      </nav>
      <Outlet />
      <HomeFooter />
    </main>
  );
};
export default SiteNav;
