import { Outlet, useNavigate } from 'react-router';
import { HomeNav } from '../../components/HomeNav/HomeNav';

const Layout = () => {
  return (
    <main className="bg-[#7077A1] pt-5 pb-14 min-h-[100%] dark:bg-black">
      <Outlet />
    </main>
  );
};
export default Layout;
