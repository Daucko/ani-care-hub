import { Form, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SearchModal from './SearchComp/SearchModal';
import Welcome from '../components/WelcomeSection/Welcome';
import { BentoGridDemo } from '../components/ServiceCards/WhyCards';
import DoctorsSection from '../components/DocSection/DoctorsSection';
import ContactSection from '../components/ContactSection/ContactSection';
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
      <section className="w-full mt-60" id="doctorSection">
        <DoctorsSection />
      </section>
      <section className="my-20 relative h-full">
        <ContactSection />
      </section>
      <section id="testimonialSection">
        <Testimonial />
      </section>
    </main>
  );
};
export default HomePage;
