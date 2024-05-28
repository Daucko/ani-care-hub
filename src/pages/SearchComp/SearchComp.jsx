import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { useNavigate } from 'react-router';
import { FiSearch } from 'react-icons/fi';
import { HiMiniXMark } from 'react-icons/hi2';

export default function SearchComp() {
  const [showModal, setShowModal] = React.useState(false);

  const navigate = useNavigate();

  return (
    <>
      <button
        className=" text-[#2D3250]"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <IoSearch className="w-5 h-5 cursor-pointer dark:text-[#7E8EF1]" />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm p-10 bg-white rounded">
              <div className="relative bg-white p-2  rounded-t">
                <button
                  className="absolute -top-10 -right-5 p-1 bg-white border-0 text-black opacity-5  text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <HiMiniXMark />
                </button>
              </div>
              <div className="relative flex w-full flex-wrap items-stretch mb-3">
                <span className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 pt-2">
                  <FiSearch className="text-gray-500" />
                </span>
                <input
                  type="text"
                  placeholder="Placeholder"
                  className="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pl-10"
                />
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
