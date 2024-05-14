import { Outlet, useNavigate, useParams } from 'react-router';
import { HomeNav } from '../HomeNav/HomeNav';
import HomeFooter from './HomeFooter';

const SiteNav = () => {
  const navigate = useNavigate();

  const { pet } = useParams();

  const onSearchClick = () => {
    navigate('/search');
  };

  return (
    <main>
      <nav className="py-3 border-solid border-b-2 sticky top-0 bg-white/80 z-50">
        <HomeNav onSearchClick={onSearchClick} pet={pet} />
      </nav>
      <Outlet />
      <HomeFooter />
    </main>
  );
};
export default SiteNav;
