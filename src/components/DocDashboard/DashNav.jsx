import { Link, useLocation } from 'react-router-dom';
import classes from './DashNav.module.css';
import { IoHome } from 'react-icons/io5';
import { FaUserMd } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';

const DashNav = ({ name, id }) => {
  const location = useLocation();

  return (
    <nav className="relative flex flex-col justify-center items-center gap-[10px]  text-[#444444] w-[90px] h-[60vh] bg-white mr-8">
      <ul className={classes.parent}>
        <li
          className={
            location.pathname === `/vets/${id}/home`
              ? 'group active relative'
              : ''
          }
        >
          <Link to={`/vets/${id}/home`} className={classes.link}>
            <span>
              <IoHome className="text-gray-400/50 pointer-events-none group-[.active]:text-[#2D3250] group-[.active]:drop-shadow-xl text-[2em] transition duration-[0.5s] hover:text-[#2D3250] hover:drop-shadow-xl " />
            </span>
            <span className=" group-[.active]/:opacity-100 group-[.active]:text-[#2D3250] absolute pointer-events-none -translate-x-[85px] opacity-0 text-[0.8em] transition duration-[0.5s] uppercase group-[.active]:drop-shadow-xl">
              Home
            </span>
          </Link>
          <div className="hidden group-[.active]/:block">
            <div className={classes.marker}>
              <span></span>
            </div>
          </div>
        </li>

        <li
          className={
            location.pathname === `/vets/${id}/about`
              ? 'group active relative'
              : ''
          }
        >
          <Link to={`/vets/${id}/about`} className={classes.link}>
            <span>
              <FaUserMd className="text-gray-400/50 pointer-events-none group-[.active]:text-[#2D3250] group-[.active]:drop-shadow-xl text-[2em] transition duration-[0.5s] hover:text-[#2D3250] hover:drop-shadow-xl " />
            </span>
            <span className=" group-[.active]/:opacity-100 group-[.active]:text-[#2D3250] absolute pointer-events-none -translate-x-[85px] opacity-0 text-[0.8em] transition duration-[0.5s] uppercase group-[.active]:drop-shadow-xl">
              Home
            </span>
          </Link>
          <div className="hidden group-[.active]/:block">
            <div className={classes.marker}>
              <span></span>
            </div>
          </div>
        </li>

        <li
          className={
            location.pathname === `/vets/${id}/contact`
              ? 'group active relative'
              : ''
          }
        >
          <Link to={`/vets/${id}/contact`} className={classes.link}>
            <span>
              <BiLogOut className="text-gray-400/50 pointer-events-none group-[.active]:text-[#2D3250] group-[.active]:drop-shadow-xl text-[2em] transition duration-[0.5s] hover:text-[#2D3250] hover:drop-shadow-xl " />
            </span>
            <span className=" group-[.active]/:opacity-100 group-[.active]:text-[#2D3250] absolute pointer-events-none -translate-x-[85px] opacity-0 text-[0.8em] transition duration-[0.5s] uppercase group-[.active]:drop-shadow-xl">
              Home
            </span>
          </Link>
          <div className="hidden group-[.active]/:block">
            <div className={classes.marker}>
              <span></span>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default DashNav;
