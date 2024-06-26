import { useState, useEffect } from 'react';
import Map from './Map';
import DocsList from './DocsList';
import { Vets } from '../../utils/dummyData';

const apikey = 'WbssaADa3cmwlq4flQ8_tXKtOjWMG81mnfe7o3gjbHM';

const ContactSection = ({ lat, long }) => {
  const [doctorPosition, setDoctorPosition] = useState(null);

  const onClickHandler_ = (location) => {
    setDoctorPosition(location);
    console.log(`lat: ${lat}, long: ${long}`);
  };

  const userPosition = { lat: lat || 6.537216, lng: long || 3.3521664 };

  return (
    <main className="h-full">
      <p className="text-3xl text-center text-[#2D3250] dark:text-[#7E8EF1]">
        Contact
      </p>
      <div className="w-[10rem] rounded-full h-1 bg-black/20 mx-auto mb-20 mt-2 -z-10 dark:bg-neutral-100/80">
        <span className="w-[4rem] h-1 bg-[#7077A1] z-50 mx-auto block dark:bg-[#7E8EF1]"></span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[15vw_minmax(80vw,_1fr)_100px] mx-5 sm:mx-[20px]">
        <DocsList list={Vets} onClickHandler={onClickHandler_} />
        <Map
          apikey={apikey}
          userPosition={userPosition}
          doctorPosition={doctorPosition}
        />
      </div>
    </main>
  );
};

export default ContactSection;
