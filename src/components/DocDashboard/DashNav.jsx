import { NavLink } from "react-router-dom"




const DashNav = () => {
  return (
    <nav className="relative flex flex-col justify-center items-center gap-[10px] bg-[#242424] text-[#444444] w-[100px] h-[60vh]">
        <NavLink to='/' className={({isActive})=(
            isActive ? 'group active relative' : 'relative'
  )}>
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
        </NavLink>
          <NavLink to='/' className={({isActive})=(
            isActive ? 'group active relative' : 'relative'
  )}>
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
        </NavLink>
          <NavLink to='/' className={({isActive})=(
            isActive ? 'group active relative' : 'relative'
  )}>
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
        </NavLink>
    </nav>
  )
}
export default DashNav