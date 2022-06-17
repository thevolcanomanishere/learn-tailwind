import React from "react";
import { laptop } from "../assets";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-turboGreen uppercase font-bold">
            Data Analytics Dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>Here is a large amount of text that makes perfect sense.</p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-turboGreen">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
