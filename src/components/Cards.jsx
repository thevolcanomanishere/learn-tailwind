import React from "react";
import { single } from "../assets";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={single}
            alt="/"
          />
          <h2 className="text-2xl">Single User</h2>
          <p>$150</p>
          <div>
            <p>500Gb Storage</p>
            <p>1 Granted User</p>
            <p>Send up to 5 Tb</p>
          </div>
        </div>
        <button>Start Trial</button>
      </div>
    </div>
  );
};

export default Cards;
