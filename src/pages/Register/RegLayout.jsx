import { BiLeftArrowAlt } from 'react-icons/bi';

import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <main>
      <h1 className="text-6xl text-center mt-10 font-semibold text-[#]">
        What Service are you bringing on board?
      </h1>

      <Outlet />
    </main>
  );
};
export default Layout;
