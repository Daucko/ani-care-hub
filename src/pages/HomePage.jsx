import { Form, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SearchModal from './SearchComp/SearchModal';
import Welcome from '../components/WelcomeSection/Welcome';
import { BentoGridDemo } from '../components/ServiceCards/WhyCards';
import DoctorsSection from '../components/DocSection/DoctorsSection';
import ContactSection from '../components/ContactSection/ContactSection';
import { Testimonial } from './testimonial/Testimonial';
import NavigationIcons from '../ui/NavigationIcons';

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
      <section className="my-20 relative">
        <article>
          <NavigationIcons className="absolute right-0 top-0" />
        </article>
        <ContactSection />
      </section>
      <Testimonial />
    </main>
  );
};
export default HomePage;
