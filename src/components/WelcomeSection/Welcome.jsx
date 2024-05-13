import HoverCardUi from '../../ui/HoverCard';
import classes from './Welcome.module.css';

const Welcome = () => {
  return (
    <main className={classes.main}>
      <h1 className="text-5xl text-white sm:text-black font-bold sm:ml-[50vw]">
        WELCOME TO AniCare Hub
      </h1>
      <p className="text-3xl text-white sm:text-black sm:ml-[50vw] mt-5">
        A platform for anything Animal
      </p>
    </main>
  );
};
export default Welcome;
