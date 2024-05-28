import { DoctorCard } from './DoctorCard';

const DoctorsSection = () => {
  return (
    <main>
      <p className="text-3xl text-center text-[#2D3250] dark:text-[#7E8EF1]">
        Doctors
      </p>
      <div className="w-[10rem] rounded-full h-1 bg-black/20 mx-auto mb-20 mt-2 -z-10 dark:bg-neutral-100/80">
        <span className="w-[4rem] h-1 bg-[#7077A1] z-50 mx-auto block dark:bg-[#7E8EF1]"></span>
      </div>
      <div className="">
        <DoctorCard />
        {/* <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard /> */}
      </div>
    </main>
  );
};
export default DoctorsSection;
