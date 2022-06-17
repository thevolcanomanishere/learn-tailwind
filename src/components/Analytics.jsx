import React from "react";
import { laptop } from "../assets";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p>Data Analytics Dashboard</p>
          <h1>Manage Data Analytics Centrally</h1>
          <p>Here is a large amount of text that makes perfect sense.</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
