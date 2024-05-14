import HoverCardUi from '../../ui/HoverCard';
import classes from './Welcome.module.css';

const Welcome = () => {
  return (
    <main className={classes.main}>
      <h1 className="text-5xl text-white sm:text-black font-bold text-center sm:text-left sm:ml-[50vw]">
        WELCOME TO AniCCare Hub
      </h1>
      <p className="text-3xl text-white sm:text-black text-center sm:text-left sm:ml-[50vw] mt-5">
        A platform for anything Animal
      </p>
    </main>
  );
};
export default Welcome;
