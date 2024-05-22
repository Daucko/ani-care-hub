import { Link } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import classes from './DocDashNav.module.css';
import { useState, useEffect, useRef } from 'react';
import DashHome from './DashHome';

export const DocDashNav = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);

  useEffect(() => {
    setActive1(true);
  }, []);

  return (
    <main className={classes.main}>
      <ul className={classes.parent}>
        <li
          className={
            active1 ? 'list-none group active relative' : 'list-none relative'
          }
          onClick={() => setActive1(!active1)}
        >
          <div>
            <Link to={'#'} className={classes.link}>
              <span>
                <IoHome className="pointer-events-none group-[.active]:text-[#c7f80d] group-[.active]:drop-shadow-xl text-[2.5em] transition duration-[0.5s] hover:text-[#c7f80d] hover:drop-shadow-xl active:text-[#c7f80d] active:dr" />
              </span>
              <span className=" group-[.active]/:opacity-100 group-[.active]:text-[#c7f80d] absolute pointer-events-none -translate-x-[85px] opacity-0 text-[0.8em] transition duration-[0.5s] uppercase group-[.active]:drop-shadow-xl">
                Home
              </span>
            </Link>
            <div className="hidden group-[.active]/:block">
              <div className={classes.marker}>
                <span></span>
              </div>
            </div>
          </div>
          <DashHome className="absolute -right-[2000%] top-0 w-[70vw]" />
        </li>
        <li
          className={
            active2 ? 'list-none group active relative' : 'list-none relative'
          }
          onClick={() => setActive2(!active2)}
        >
          <Link to={'#'} className={classes.link}>
            <span>
              <IoHome className="pointer-events-none group-[.active]:text-[#c7f80d] group-[.active]:drop-shadow-xl text-[2.5em] transition duration-[0.5s] hover:text-[#c7f80d] hover:drop-shadow-xl active:text-[#c7f80d] active:dr" />
            </span>
            <span className=" group-[.active]/:opacity-100 group-[.active]:text-[#c7f80d] absolute pointer-events-none -translate-x-[85px] opacity-0 text-[0.8em] transition duration-[0.5s] uppercase group-[.active]:drop-shadow-xl">
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
            active3 ? 'list-none group active relative' : 'list-none relative'
          }
          onClick={() => setActive3(!active3)}
        >
          <Link to={'#'} className={classes.link}>
            <span>
              <IoHome className="pointer-events-none group-[.active]:text-[#c7f80d] group-[.active]:drop-shadow-xl text-[2.5em] transition duration-[0.5s] hover:text-[#c7f80d] hover:drop-shadow-xl active:text-[#c7f80d] active:dr" />
            </span>
            <span className=" group-[.active]/:opacity-100 group-[.active]:text-[#c7f80d] absolute pointer-events-none -translate-x-[85px] opacity-0 text-[0.8em] transition duration-[0.5s] uppercase group-[.active]:drop-shadow-xl">
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
            active4 ? 'list-none group active relative' : 'list-none relative'
          }
          onClick={() => setActive4(!active4)}
        >
          <Link to={'#'} className={classes.link}>
            <span>
              <IoHome className="pointer-events-none group-[.active]:text-[#c7f80d] group-[.active]:drop-shadow-xl text-[2.5em] transition duration-[0.5s] hover:text-[#c7f80d] hover:drop-shadow-xl active:text-[#c7f80d] active:dr" />
            </span>
            <span className=" group-[.active]/:opacity-100 group-[.active]:text-[#c7f80d] absolute pointer-events-none -translate-x-[85px] opacity-0 text-[0.8em] transition duration-[0.5s] uppercase group-[.active]:drop-shadow-xl">
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
            active3 ? 'list-none group active relative' : 'list-none relative'
          }
          onClick={() => setActive3(!active3)}
        >
          <Link to={'#'} className={classes.link}>
            <span>
              <IoHome className="pointer-events-none group-[.active]:text-[#c7f80d] group-[.active]:drop-shadow-xl text-[2.5em] transition duration-[0.5s] hover:text-[#c7f80d] hover:drop-shadow-xl active:text-[#c7f80d] active:dr" />
            </span>
            <span className=" group-[.active]/:opacity-100 group-[.active]:text-[#c7f80d] absolute pointer-events-none -translate-x-[85px] opacity-0 text-[0.8em] transition duration-[0.5s] uppercase group-[.active]:drop-shadow-xl">
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
    </main>
  );
};
