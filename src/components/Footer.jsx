import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">TAILWIND.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-3 flex justify-between">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-small">Marketing</li>
            <li className="py-2 text-small">Commerce</li>
            <li className="py-2 text-small">Analytics</li>
            <li className="py-2 text-small">Insights</li>
          </ul>
        </div>

        <div className="lg:col-span-3 flex justify-between">
          <div>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
              <li className="py-2 text-small">Marketing</li>
              <li className="py-2 text-small">Commerce</li>
              <li className="py-2 text-small">Analytics</li>
              <li className="py-2 text-small">Insights</li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-3 flex justify-between">
          <div>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
              <li className="py-2 text-small">Marketing</li>
              <li className="py-2 text-small">Commerce</li>
              <li className="py-2 text-small">Analytics</li>
              <li className="py-2 text-small">Insights</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
