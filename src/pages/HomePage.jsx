import { Form, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import SearchModal from './SearchComp/SearchInput';
import Welcome from '../components/WelcomeSection/Welcome';
import { BentoGridDemo } from '../components/ServiceCards/WhyCards';
import DoctorsSection from '../components/DocSection/DoctorsSection';
import ContactSection from '../components/ContactSection/ContactSection';
import { Testimonial } from './testimonial/Testimonial';
import Switcher from '../ui/Switcher';

const HomePage = () => {
  const [popSearch, setPopSearch] = useState(false);
  const navigate = useNavigate();

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          console.log(`latitude: ${latitude}, longitude; ${longitude}`);
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  if (popSearch) {
    return <SearchModal />;
  }

  return (
    <main className="">
      <header>
        <Welcome />
      </header>
      <section>
        <BentoGridDemo />
      </section>
      <Switcher />
      <section className="w-full mt-60" id="doctorSection">
        <DoctorsSection />
      </section>
      <section className="my-20 relative h-full">
        {error ? (
          <ContactSection lat={6.537216} long={3.3521664} />
        ) : (
          <ContactSection lat={latitude} long={longitude} />
        )}
      </section>
      <section id="testimonialSection">
        <Testimonial />
      </section>
    </main>
  );
};
export default HomePage;
