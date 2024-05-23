import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import SearchModal from './pages/SearchComp/SearchInput';
import RegisterService from './pages/Register/RegisterService';
import RegLayout from './pages/Register/RegLayout';
import {
  DocSignupForm,
  action as docSignupAction,
} from './pages/signupform/DocSignupForm';
import {
  SignupForm,
  action as signupAction,
} from './pages/signupform/SignupForm';
import SignIn from './pages/signin/SignIn';
import SiteNav from './components/layout/SiteNav';
import { BuyAPet } from './pages/buypet/BuyAPet';
import { DogSchool } from './pages/DogSchool/DogSchool';
import DogBoarding from './pages/DogBoarding/DogBording';
import { VetPage } from './pages/Vetpage/VetPage';
import AboutUs from './pages/AboutUs';
import { DocDashNav } from './components/DocDashboard/DocDashNav';
import DashNav from './components/DocDashboard/DashNav';
import DashLayout from './components/DocDashboard/DashLayout';
import DashHome from './components/DocDashboard/DashHome';
import DashAbout from './components/DocDashboard/DashAbout';
import DashContact from './components/DocDashboard/DashContact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteNav />,
    children: [
      { path: '/', element: <HomePage /> },
      // { path: '/search', element: <SearchModal /> },
      {
        path: '/register-service',
        element: <RegLayout />,
        children: [
          { path: '/register-service', element: <RegisterService /> },
          {
            path: '/register-service/vet-signup',
            element: <DocSignupForm />,
            action: docSignupAction,
          },
          {
            path: '/register-service/signup',
            element: <SignupForm />,
            action: signupAction,
          },
        ],
      },
      { path: '/sign-in', element: <SignIn /> },
      { path: '/:pet', element: <BuyAPet /> },
      { path: '/dog-school', element: <DogSchool /> },
      { path: '/dog-boarding', element: <DogBoarding /> },
      {
        path: '/vets',
        element: <VetPage />,
      },
      {
        path: '/vets/:vetId',
        element: <DashLayout />,
        children: [
          { path: '/vets/:vetId/home', element: <DashHome /> },
          { path: '/vets/:vetId/contact', element: <DashContact /> },
          { path: '/vets/:vetId/about', element: <DashAbout /> },
        ],
      },
      { path: '/about-us', element: <AboutUs /> },
      // { path: '*', element: <DashNav /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
