import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-2">
          <h1 className="md:text-3xl sm:text-3xl text-2xl font-bold py-2">
            Want some useless information?
          </h1>
          <p>Drop your email here and sign up.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-turboGreen text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-4">
              Notify Me
            </button>
          </div>
          <p>
            We don't care about your privacy. Read here
            <span className="text-turboGreen"> Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
