import { Outlet, useNavigate } from 'react-router';
import { HomeNav } from '../../components/HomeNav/HomeNav';

const Layout = () => {
  const navigate = useNavigate();

  const onSearchClick = () => {
    navigate('/search');
  };

  return (
    <main className="bg-[#7077A1] pt-5 pb-14 min-h-[100%]">
      <nav className="">
        <HomeNav onSearchClick={onSearchClick} />
      </nav>

      <Outlet />
    </main>
  );
};
export default Layout;
