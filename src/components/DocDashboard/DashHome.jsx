// import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { GoArrowRight } from 'react-icons/go';
import { Calender } from '../../ui/Calender';
import { FaLocationDot } from 'react-icons/fa6';
import { PiPhoneFill } from 'react-icons/pi';
import { BsCalendarDateFill } from 'react-icons/bs';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const DashHome = ({ name, image }) => {
  const [details, setDetails] = useState({
    id: 1,
    title: 'Annual therapist check-up',

    address: ' Agbado, Lagos. ',
    phoneNo: '08199999999',
    date: ' 28-10-2024',
  });

  const newDetails = ({ title, name, address, phoneNo }) => {
    const newDetails = {
      id: new Date(),
      title,
      name,
      address,
      phoneNo,
    };
    setDetails({
      ...details,
      title: newDetails.title,
      name: newDetails.name,
      address: newDetails.address,
      phoneNo: newDetails.phoneNo,
    });
  };

  let apptDate;
  // const infos = details.filter((detail) => apptDate === detail.date);

  return (
    <main className=" w-[74vw]">
      <header className="border-b border-t pl-5 py-5 text-[#2D3250] font-bold">
        Hello, {name}
      </header>
      <div className="grid grid-cols-5">
        <section className="col-span-3 border-r-2 border-gray-200/90 h-full">
          <section className="flex justify-center items-center gap-4 p-5">
            <article className="bg-gradient-to-r from-[#2D3250] to-[#424769]/80 p-5 rounded-[20px] h-full w-[230px] shadow-md">
              <h1 className="text-white font-semibold">
                Get Online Consultation!
              </h1>
              <p className="text-white text-[14px] font-light mt-3">
                Quick and convenient consultations without leaving home.
              </p>
              <Link className="bg-white flex justify-center gap-2 items-center font-semibold text-[13px] text-[#2D3250] p-2 mt-16 rounded-full">
                <p>Book an Appointment</p>
                <GoArrowRight className="text-[20px]" />
              </Link>
            </article>
            <article className=" bg-[#7077A1]/60  p-5 rounded-[20px] h-full w-[230px] shadow-md">
              <h1 className="font-semibold">Get Doctor Home Visit!</h1>
              <p className="text-[14px] font-light mt-3">
                Is your pet not feeling too well? Can't get it to the hospital?
                Invite a vet to your home!
              </p>
              <Link className="bg-white flex justify-center gap-2 items-center font-semibold text-[13px] text[#2D3250] p-2 mt-16 rounded-full">
                <p>Book an Appointment</p>
                <GoArrowRight className="text-[20px]" />
              </Link>
            </article>
          </section>
          <section className="px-16 my-5">
            <h1 className="font-bold text-[#2D3250] mb-5">
              Appointment Details{' '}
            </h1>

            <div
              className="border border-gray-200/90 p-5 pb-20 rounded-[20px] shadow-md"
              // key={info.id}
            >
              <div className="flex items-center justify-between">
                <h6 className="font-bold text-[#2D3250] text-[13px]">
                  {details.title}
                </h6>
                <p className="text-[#2D3250] text-[11px] font-semibold">
                  last visit: 01-10-2023
                </p>
              </div>
              <p className="text-[#2D3250] text-[12px] font-light my-3">
                It will soon be a year since you visit this patient
              </p>
              <div className="flex items-stretch justify-stretch gap-3 h-[100px]">
                <div className="bg-gray-200/90 w-full rounded-[10px] relative">
                  <p className="absolute bottom-3 left-4">
                    <FaLocationDot />
                    {details.address}
                  </p>
                </div>
                <div className="bg-gray-200/90 w-full rounded-[10px] relative">
                  <p className="absolute bottom-3 left-4">
                    <PiPhoneFill />
                    {details.phoneNo}
                  </p>
                </div>
                <div className="bg-gray-200/90 w-full rounded-[10px] relative">
                  <p className="absolute bottom-3 left-4">
                    <BsCalendarDateFill />
                    28-10-2024
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="col-span-2 mx-auto">
          <article>
            <div className="mt-5 w-full">
              <img
                src={image}
                alt={name}
                className="w-32 h-32 object-cover rounded-[10px] block mx-auto"
              />
              <h3 className="font-bold text-[#2D3250] text-center">{name}</h3>
            </div>
            <div className="border-2 border-gray-400/90 rounded-[30px] p-3 w-[20vw] text-center my-5 mx-auto">
              <p className="text-[11px] text-[#7077A1]">
                Upcoming Appointments: 2
              </p>
              <p className="text-[#7077A1] text-[11px]">
                Total Appointments: 10
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#2D3250]">My Appointments</h3>
            </div>
            <div className="border border-gray-200/90 p-2 rounded-[20px] my-5 shadow-md">
              <Calender newDetails={newDetails} apptDate={apptDate} />
            </div>
          </article>
        </section>
      </div>
    </main>
  );
};
export default DashHome;
