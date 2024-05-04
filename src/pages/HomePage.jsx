import { Form, Link, useNavigate } from 'react-router-dom';
import { HomeNav } from '../components/HomeNav/HomeNav';
import { useEffect, useState } from 'react';
import SearchModal from './SearchComp/SearchModal';
import Welcome from '../components/WelcomeSection/Welcome';
import { BentoGridDemo } from '../components/ServiceCards/WhyCards';
import DoctorsSection from '../components/DocSection/DoctorsSection';
import { DoctorCard } from '../components/DocSection/DoctorCard';
import ContactSection from '../components/ContactSection/ContactSection';
import HomeFooter from '../components/HomeFooter';
import { Testimonial } from './Testimonial';

const HomePage = () => {
  const [popSearch, setPopSearch] = useState(false);
  const navigate = useNavigate();

  const onSearchClick = () => {
    navigate('/search');
  };

  if (popSearch) {
    return <SearchModal />;
  }

  return (
    <main className="">
      <header>
        <nav className="py-5 border-solid border-b-2 sticky top-0 bg-white/80">
          <HomeNav onSearchClick={onSearchClick} />
        </nav>
        <Welcome />
      </header>
      <section>
        <BentoGridDemo />
      </section>
      <section className="w-full mt-60">
        <DoctorsSection />
      </section>
      <section className="my-20">
        <ContactSection />
      </section>
      <Testimonial />
      <HomeFooter />
    </main>
  );
};
export default HomePage;
