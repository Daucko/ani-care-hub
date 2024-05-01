import classes from './Welcome.module.css';

const Welcome = () => {
  return (
    <main className={classes.main}>
      <h1 className="text-6xl font-bold sm:ml-[50vw]">
        WELCOME TO AniCare Hub
      </h1>
      <p className="text-3xl sm:ml-[50vw] mt-5">
        A platform for anything Animal
      </p>
    </main>
  );
};
export default Welcome;
