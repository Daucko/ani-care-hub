import { useState, useEffect } from 'react';
import Map from './Map';
import DocsList from './DocsList';

const apikey = 'WbssaADa3cmwlq4flQ8_tXKtOjWMG81mnfe7o3gjbHM';

const ContactSection = () => {
  const [doctorPosition, setDoctorPosition] = useState(null);

  const onClickHandler_ = (location) => {
    setDoctorPosition(location);
  };

  // Austurvöllur square in Reykjavik
  const userPosition = { lat: 64.1472, lng: -21.9398 };

  const doctorsList = [
    {
      name: 'The Fish Market',
      // location: { lat: 64.1508, lng: -21.9536 },
      location: { lat: 6.71162, lng: 3.27605 },
    },
    {
      name: 'Bæjarins Beztu Pylsur',
      location: { lat: 64.1502, lng: -21.9519 },
    },
    {
      name: 'Grillmarkadurinn',
      location: { lat: 64.1475, lng: -21.9347 },
    },
    {
      name: 'Kol Restaurant',
      location: { lat: 64.1494, lng: -21.9337 },
    },
  ];

  return (
    <main>
      <p className="text-3xl text-center text-[#2D3250]">Contact</p>
      <div className="w-[10rem] rounded-full h-1 bg-black/20 mx-auto mb-20 mt-2 -z-10">
        <span className="w-[4rem] h-1 bg-[#7077A1] z-50 mx-auto block"></span>
      </div>
      <div className="grid grid-cols-3 gap-8 max-w-[80vw] mx-auto"></div>
      <div className="flex ">
        <DocsList list={doctorsList} onClickHandler={onClickHandler_} />
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
