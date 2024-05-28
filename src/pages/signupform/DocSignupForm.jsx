import React from 'react';
import { Label } from '../../components/SignUp/Label';
import { Input } from '../../components/SignUp/Input';
import { cn } from '../../utils/cn';

import { BiLeftArrowAlt } from 'react-icons/bi';

import { useLoaderData, useNavigate } from 'react-router';
import { Form, Link, redirect } from 'react-router-dom';
import { Textarea } from '../../components/SignUp/Textarea';
import ImagePicker from '../../ui/ImagePicker/ImagePicker';

export function DocSignupForm() {
  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted');
  //   navigate('..');
  // };
  return (
    <div className="max-w-xl w-full mx-auto mt-20 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-[#2D3250] dark:text-neutral-200">
        Welcome to AniCare Hub
      </h2>
      <p className="text-[#2D3250] text-sm  mt-2 dark:text-neutral-300">
        Welcome onboard our esteem Doctor, please sign up to anicarehub. <br />
        Note that the longitude and latitude input fields are the ones for your{' '}
        {''}
        <strong>office address</strong>.
      </p>

      <Form className="my-8" method="post">
        <div className=" flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
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
          <Label htmlFor="email" className="text-[#2D3250]">
            Email Address
          </Label>
          <Input
            id="email"
            placeholder="daucko@RealMadridfc.com"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password" className="text-[#2D3250]">
            Password
          </Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            title="Minimum 6 characters at least 1 Alphabet and 1 Number"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="vcn-number" className="text-[#2D3250]">
            VCN Number
          </Label>
          <Input id="vcn-number" placeholder="••••••••" type="number" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="address" className="text-[#2D3250]">
            Office Address
          </Label>
          <Textarea
            id="address"
            placeholder="6 Wale Ojerinde Street, Iroko Town, Ajegunle Bus-Stop, Sango Ota, Ogun State"
          ></Textarea>
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="latitude" className="text-[#2D3250]">
            Latitude
          </Label>
          <Input
            id="latitude"
            placeholder=" 64.1502"
            type="number"
            step="0.0001"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="longitude" className="text-[#2D3250]">
            Longitude
          </Label>
          <Input
            id="longitude"
            placeholder="-21.9519"
            type="number"
            step="0.0001"
          />
        </LabelInputContainer>
        <ImagePicker label="Your Picture" name="image" />

        <button
          className="bg-gradient-to-br relative group/btn from-[#FFBF9B] dark:from-zinc-900 dark:to-zinc-900 to-[#F6B17A] block dark:bg-zinc-800 w-full text-[#2D3250] dark:text-[#7E8EF1] rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
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
  const response = await fetch(url, {
    methods: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return redirect('/');
}
