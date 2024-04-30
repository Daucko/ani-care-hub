import { DoctorCard } from '../components/DoctorCard';

const DoctorsSection = () => {
  return (
    <main>
      <p className="text-3xl text-center text-[#2D3250]">Doctors</p>
      <div className="w-[10rem] rounded-full h-1 bg-black/20 mx-auto mb-20 mt-2 -z-10">
        <span className="w-[4rem] h-1 bg-[#7077A1] z-50 mx-auto block"></span>
      </div>
      <div className="grid grid-cols-3 gap-8 max-w-[80vw] mx-auto">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </div>
    </main>
  );
};
export default DoctorsSection;
