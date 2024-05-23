// import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { GoArrowRight } from 'react-icons/go';

const DashHome = ({ name, image }) => {
  console.log(name, image);

  return (
    <main className=" w-[74vw]">
      <header className="border-2 border-gray-200/90 pl-5 pb-5">
        Hello, {name}
      </header>
      <div className="grid grid-cols-5">
        <section className="col-span-3 border-r-2 border-gray-200/90 h-full">
          <section className="flex justify-center items-center gap-4 p-5">
            <article className="bg-gradient-to-r from-[#2D3250] to-[#424769]/80 p-5 rounded-[20px] h-full w-[230px]">
              <h1 className="text-white font-semibold">
                Get Online Consultation!
              </h1>
              <p className="text-white text-[14px] font-light mt-3">
                Quick and convenient consultations without leaving home.
              </p>
              <div className="bg-white flex justify-center gap-2 items-center font-semibold text-[13px] p-2 mt-16 rounded-full">
                <p class>Book an Appointment</p>
                <GoArrowRight className="text-[20px]" />
              </div>
            </article>
            <article className=" bg-[#7077A1]/60  p-5 rounded-[20px] h-full w-[230px]">
              <h1 className="font-semibold">Get Doctor Home Visit!</h1>
              <p className="text-[14px] font-light mt-3">
                Is your pet not feeling too well? Can't get it to the hospital?
                Invite a vet to your home!
              </p>
              <div className="bg-white flex justify-center gap-2 items-center font-semibold text-[13px] p-2 mt-16 rounded-full">
                <p>Book an Appointment</p>
                <GoArrowRight className="text-[20px]" />
              </div>
            </article>
          </section>
          <section className="">
            <h1>Hi</h1>
          </section>
        </section>
        <section className="col-span-2 place-self-center">
          <article>
            <div className="mt-5">
              <img
                src={image}
                alt={name}
                className="w-32 h-32 object-cover rounded-[10px]"
              />
              <h1>{name}</h1>
            </div>
            <div className="border-2 border-gray-400/90 rounded-[30px] p-3">
              <p>Upcoming Appointments: 2</p>
              <p>Total Appointments: 10 </p>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
};
export default DashHome;
