import { Form, Link, useNavigate } from 'react-router-dom';
import { HomeNav } from '../components/HomeNav/HomeNav';
import { useEffect, useState } from 'react';
import SearchModal from './SearchComp/SearchModal';
import Welcome from '../components/WelcomeSection/Welcome';
import { BentoGridDemo } from '../components/ServiceCards/WhyCards';
import DoctorsSection from '../components/DocSection/DoctorsSection';
import ContactSection from '../components/ContactSection/ContactSection';
import HomeFooter from '../components/layout/HomeFooter';
import { Testimonial } from './testimonial/Testimonial';

const HomePage = () => {
  const [popSearch, setPopSearch] = useState(false);
  const navigate = useNavigate();

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
      <section className="w-full mt-60">
        <DoctorsSection />
      </section>
      <section className="my-20">
        <ContactSection />
      </section>
      <Testimonial />
    </main>
  );
};
export default HomePage;
