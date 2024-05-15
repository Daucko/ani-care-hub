import { GrLocation } from 'react-icons/gr';
import classes from './DogBoarding.module.css';
import { Link } from 'react-router-dom';

const DogBoarding = () => {
  return (
    <main className="py-20 bg-[#7077A1]">
      <section className="flex flex-col sm:flex-row justify-between mx-auto w-[80vw]">
        <article className="grid grid-cols-2 gap-10">
          <img
            src="/images/dog-boarding1.jpg"
            alt="boarding-pic1"
            className="rounded-[50px] object-cover border-[5px] border-[#2D3250] w-76 h-52"
          />
          <img
            src="/images/dog-boarding2.jpg"
            alt="boarding-pic1"
            className="rounded-[50px] object-cover border-[5px] border-[#2D3250] w-76 h-52"
          />
          <img
            src="/images/dog-boarding3.jpg"
            alt="boarding-pic1"
            className="rounded-[50px] object-cover border-[5px] border-[#2D3250] w-76 h-52"
          />
          <img
            src="/images/dog-boarding4.jpg"
            alt="boarding-pic1"
            className="rounded-[50px] object-cover border-[5px] border-[#2D3250] w-76 h-52"
          />
        </article>
        <article className="relative flex flex-col justify-center items-center pl-5 mt-10">
          <span className="absolute w-60 sm:w-[1px] h-[1px] sm:h-80 bg-[#2D3250] -top-[8%] sm:top-30 left-[10%] sm:left-0 "></span>
          <div className="w-20 sm:w-[200px] h-20 sm:h-[200px] rounded-full border border-[#2D3250]">
            <img
              src="/images/avatar1.webp"
              alt=""
              className="w-[100%] h-[100%] rounded-full object-cover"
            />
          </div>
          <h1 className="text-[20px] font-semibold ">Dauda Tijani</h1>.
          <div className="flex gap-5 items-center">
            <GrLocation className="font-semibold text-[15px] sm:text-[20px]" />
            <p className="text-[16px] sm:text-[20px] font-semibold sm:font-normal">
              8 london street, America, USA.
            </p>
          </div>
          <Link to="">
            <button className={classes.button}>Contact Us</button>
          </Link>
        </article>
      </section>
    </main>
  );
};
export default DogBoarding;
