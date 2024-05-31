import React, { useState } from 'react';

export default function FormModal({ open, removeModal, newAppointment }) {
  const [title, setTitle] = useState();
  const [clientName, setClientName] = useState();
  const [address, setAddress] = useState();
  const [phoneNo, setPhoneNo] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toISOString().split('T')[0];

    // const formData = new FormData(e.currentTarget);
    // const values = [...formData.values()];

    // if (values.includes('')) {
    //   alert('Please fill all the fields');
    //   return;
    // }

    // const title = formData.get('title');
    // const name = formData.get('name');
    // const address = formData.get('address');
    // const phoneNo = formData.get('phone-num');

    // const formObject = Object.fromEntries(formData);

    // newDetails(title, name, address, phoneNo);

    // console.log(title, name, address, phoneNo);

    // e.currentTarget.reset();
    console.log('Hello from FormModal', title, clientName, address, phoneNo,);
    newAppointment(title, clientName, address, phoneNo, date,);
    removeModal();
  };

  return (
    <>
      {open ? (
        <>
          <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              {/*content*/}
              <div className="border-0 rounded-lg w-[400px] shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={removeModal}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form action="" className="pr-10" onSubmit={handleSubmit}>
                  <fieldset className="mb-[15px] flex items-center gap-5">
                    <label
                      className="text-violet11 w-[90px] text-right text-[15px]"
                      htmlFor="title"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                      id="title"
                      name="title"
                      required
                      placeholder="Title of the appointment"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </fieldset>
                  <fieldset className="mb-[15px] flex items-center gap-5">
                    <label
                      className="text-violet11 w-[90px] text-right text-[15px]"
                      htmlFor="name"
                    >
                      Client's Name
                    </label>
                    <input
                      className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Client Name"
                      value={clientName}
                      onChange={(e) => {
                        setClientName(e.target.value);
                      }}
                    />
                  </fieldset>

                  <fieldset className="mb-[15px] flex items-center gap-5">
                    <label
                      className="text-violet11 w-[90px] text-right text-[15px]"
                      htmlFor="address"
                    >
                      Address
                    </label>
                    <textarea
                      className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                      id="address"
                      name="address"
                      placeholder="City, State"
                      required
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    ></textarea>
                  </fieldset>
                  <fieldset className="mb-[15px] flex items-center gap-5">
                    <label
                      className="text-violet11 w-[90px] text-right text-[15px]"
                      htmlFor="phone-num"
                    >
                      Phone Number
                    </label>
                    <input
                      className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                      id="phone-num"
                      name="phone-num"
                      pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                      required
                      type="tel"
                      placeholder="format: 020-0000-0000"
                      value={phoneNo}
                      onChange={(e) => {
                        setPhoneNo(e.target.value);
                      }}
                    />
                  </fieldset>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="cancel"
                      onClick={removeModal}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
