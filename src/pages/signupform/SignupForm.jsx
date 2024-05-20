import React from 'react';
import { Label } from '../../components/SignUp/Label';
import { Input } from '../../components/SignUp/Input';
import { cn } from '../../utils/cn';
import { IconBrandFacebook, IconBrandGoogle } from '@tabler/icons-react';
import { Form, Link, redirect } from 'react-router-dom';
import { Textarea } from '../../components/SignUp/Textarea';
import { BsHouses } from 'react-icons/bs';
import ImagePicker from '../../ui/ImagePicker';
import { GiJumpingDog } from 'react-icons/gi';
import { FaBusinessTime } from 'react-icons/fa';

export function SignupForm() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted');
  // };
  return (
    <div className="max-w-xl w-full mx-auto mt-20 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-[#2D3250] dark:text-neutral-200">
        Welcome to Aceternity
      </h2>
      <p className="text-[#2D3250] text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to aceternity if you can because we don&apos;t have a login flow
        yet
      </p>

      <Form className="my-8">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="text-[#2D3250]">
              First name
            </Label>
            <Input id="firstname" placeholder="Abiodun" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" className="text-[#2D3250]">
              Last name
            </Label>
            <Input id="lastname" placeholder="Olajide" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="school-name" className="text-[#2D3250]">
            Name of School
          </Label>
          <Input id="school-name" placeholder="my school name" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="address" className="text-[#2D3250]">
            School Address
          </Label>
          <Textarea
            id="address"
            placeholder="6 Wale Ojerinde Street, Iroko Town, Ajegunle Bus-Stop, Sango Ota, Ogun State"
          ></Textarea>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-[#2D3250]">
            Email Address
          </Label>
          <Input
            id="email"
            placeholder="specialthanks@toGod.com"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password" className="text-[#2D3250]">
            Password
          </Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        <fieldset>
          <legend className="mb-4 font-semibold text-gray-900 dark:text-white">
            Select Service with the required Number of Pictures
          </legend>

          <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="">
                <label
                  htmlFor="boarding-facility"
                  className="peer flex items-center ps-2 gap-2 w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 block pe-5"
                >
                  <span className="flex items-center gap-5 block w-full">
                    <BsHouses className="h-5 w-5 text-[#2D3250]" />
                    Boarding facility
                  </span>
                  <input
                    id="boarding-facility"
                    type="radio"
                    value=""
                    name="image-picker"
                    className="peer/boarding-facility w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </label>
                <div className="hidden peer-has-[:checked]:block">
                  <ImagePicker />
                  <ImagePicker />
                  <ImagePicker />
                  <ImagePicker />
                </div>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="">
                <label
                  htmlFor="dog-school"
                  className="peer flex items-center ps-2 gap-2 w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 block pe-5"
                >
                  <span className="flex items-center gap-5 block w-full">
                    <GiJumpingDog className="h-5 w-5 text-[#2D3250]" />
                    Dog School
                  </span>
                  <input
                    id="dog-school"
                    type="radio"
                    value=""
                    name="image-picker"
                    className="peer/boarding-facility w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </label>
                <div className="hidden peer-has-[:checked]:block">
                  <ImagePicker />
                </div>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="">
                <label
                  htmlFor="dog-sale"
                  className="peer flex items-center ps-2 gap-2 w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 block pe-5"
                >
                  <span className="flex items-center gap-5 block w-full">
                    <FaBusinessTime className="h-5 w-5 text-[#2D3250]" />
                    Dog Sale
                  </span>
                  <input
                    id="dog-sale"
                    type="radio"
                    value=""
                    name="image-picker"
                    className="peer/boarding-facility w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </label>
                <div className="hidden peer-has-[:checked]:block">
                  <ImagePicker />
                </div>
              </div>
            </li>
          </ul>
        </fieldset>

        <button
          className="bg-gradient-to-br relative group/btn from-[#FFBF9B] dark:from-zinc-900 dark:to-zinc-900 to-[#F6B17A] block dark:bg-zinc-800 w-full text-[#2D3250] rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandFacebook className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-[#2D3250] dark:text-neutral-300 text-sm">
              Facebook
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-[#2D3250] dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </Form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
};

export async function action({ request }) {
  const url = 'http://localhost:8000/posts';
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  const response = await fetch('url', {
    methods: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return redirect('/');
}
