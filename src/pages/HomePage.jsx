import { Form, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SearchModal from './SearchComp/SearchModal';
import Welcome from '../components/WelcomeSection/Welcome';
import { BentoGridDemo } from '../components/ServiceCards/WhyCards';
import DoctorsSection from '../components/DocSection/DoctorsSection';
import ContactSection from '../components/ContactSection/ContactSection';
import { Testimonial } from './testimonial/Testimonial';
import NavigationIcons from '../ui/NavigationIcons';
import { RiArrowUpDoubleLine } from 'react-icons/ri';
import { RiArrowDownDoubleLine } from 'react-icons/ri';

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
      <section className="my-20 relative">
        <main className="absolute right-0 top-[19%] w-5 h-[88vh] bg-[#2D3250] flex flex-col justify-center items-center gap-40">
          <a href="#doctorSection">
            <RiArrowUpDoubleLine className="text-white text-[30px] cursor-pointer" />
          </a>
          <a href="#testimonialSection">
            <RiArrowDownDoubleLine className="text-white text-[30px] cursor-pointer" />
          </a>
        </main>
        <ContactSection />
      </section>
      <section id="testimonialSection">
        <Testimonial />
      </section>
    </main>
  );
};
export default HomePage;
