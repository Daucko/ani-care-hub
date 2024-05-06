import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchModal from './pages/SearchComp/SearchModal';
import RegisterService from './pages/Register/RegisterService';
import RegLayout from './pages/Register/RegLayout';
import { DocSignupForm } from './pages/DocSignupForm';
import { SignupForm } from './pages/SignupForm';
import SignIn from './pages/signin/SignIn';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/search', element: <SearchModal /> },
  {
    path: '/register-service',
    element: <RegLayout />,
    children: [
      { path: '/register-service', element: <RegisterService /> },
      { path: '/register-service/vet-signup', element: <DocSignupForm /> },
      { path: '/register-service/signup', element: <SignupForm /> },
    ],
  },
  { path: '/sign-in', element: <SignIn /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
