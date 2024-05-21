import { Link } from 'react-router-dom';
import { RegistrationCards } from '../../components/RegisterComp/RegistrationCards';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { useState } from 'react';

const RegisterService = () => {
  const [projects, setProjects] = useState([
    {
      title: 'Veterinarian',
      description:
        'The role of a veterinarian is to provide medical care, preventive services, and advocacy for the health and welfare of animals across various species.',
      link: 'vet-signup',
    },
    {
      title: 'Dog Boarding Facility',
      description:
        ' Boarding facilities for dogs are establishments where canines are temporarily housed and cared for, providing amenities such as shelter, food, exercise, and sometimes grooming services when their owners are away. ',
      link: 'signup',
    },
    {
      title: 'Dog School',
      description:
        'A dog school is an educational facility where canines receive training and behavioral guidance to improve obedience, socialization, and overall manners under the supervision of professional trainers.',
      link: 'signup',
    },
    {
      title: 'Dog Sale',
      description:
        'Dog sale refers to the process of exchanging canines for monetary value, typically involving the transfer of ownership from a seller to a buyer.',
      link: 'signup',
    },
    {
      title: 'Do you want to render a service to Animals in another capacity?',
      description:
        'We kindly encourage you to register your service to enhance its credibility and reach a wider audience effectively.',
      link: 'signup',
    },
  ]);

  


  return (
    <section className="mt-10">
      <RegistrationCards projects={projects} />
    </section>
  );
};
export default RegisterService;

// export const projects = [

//   //   {
//   //     title: 'Microsoft',
//   //     description:
//   //       'A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
//   //     link: 'https://microsoft.com',
//   //   },
// ];
