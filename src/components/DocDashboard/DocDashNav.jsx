import { Link } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import classes from './DocDashNav.module.css';
import { useState } from 'react';

export const DocDashNav = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (active) {
      setActive(false);
    }
    return setActive(true);
  };

  return (
    <ul className={classes.parent}>
      <li
        className={active ? 'list-none group active' : 'list-none'}
        onClick={handleClick}
      >
        <Link to={'#'} className={classes.link}>
          <span>
            <IoHome className="group-[.active]:text-[#c7f80d] group-[.active]:drop-shadow-xl group-[.active]:-translate-y-[40px] text-[2.5em] transition duration-[0.5s] hover:text-[#c7f80d] hover:drop-shadow-xl active:text-[#c7f80d] active:dr" />
          </span>
          Home
        </Link>
      </li>
      <li
        className={active ? 'list-none group active' : 'list-none'}
        onClick={handleClick}
      >
        <Link to={'#'} className={classes.link}>
          <span>
            <IoHome className="group-[.active]:text-[#c7f80d] group-[.active]:drop-shadow-xl group-[.active]:-translate-y-[40px] text-[2.5em] transition duration-[0.5s] hover:text-[#c7f80d] hover:drop-shadow-xl active:text-[#c7f80d] active:dr" />
          </span>
          Home
        </Link>
      </li>
      <li
        className={active ? 'list-none group active' : 'list-none'}
        onClick={handleClick}
      >
        <Link to={'#'} className={classes.link}>
          <span>
            <IoHome className="group-[.active]:text-[#c7f80d] group-[.active]:drop-shadow-xl group-[.active]:-translate-y-[40px] text-[2.5em] transition duration-[0.5s] hover:text-[#c7f80d] hover:drop-shadow-xl active:text-[#c7f80d] active:dr" />
          </span>
          Home
        </Link>
      </li>
      <li
        className={active ? 'list-none group active' : 'list-none'}
        onClick={handleClick}
      >
        <Link to={'#'} className={classes.link}>
          <span>
            <IoHome className="group-[.active]:text-[#c7f80d] group-[.active]:drop-shadow-xl group-[.active]:-translate-y-[40px] text-[2.5em] transition duration-[0.5s] hover:text-[#c7f80d] hover:drop-shadow-xl active:text-[#c7f80d] active:dr" />
          </span>
          Home
        </Link>
      </li>
    </ul>
  );
};
