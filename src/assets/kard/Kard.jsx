import React from "react";
import { FaWifi } from "react-icons/fa6";
import { MdKingBed } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";

const Kard = ({ image, title, location, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto">
      {/* Image Section */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Content Section */}
      <div className="p-4">
        {/* Title and Location */}
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">
          <i className="fas fa-map-marker-alt mr-1"></i> {location}
        </p>

        {/* Features */}
        <div className="flex items-center text-gray-500 gap-16 mt-2">
          <div>
            <FaWifi /> <span>Wifi</span>
          </div>

          <div>
            <MdKingBed /> <span>Bed</span>
          </div>

          <div>
            <IoFastFoodOutline /> <span>Food</span>
          </div>
        </div>

        {/* Room Types */}
        <div className="text-gray-700 mt-3">
          <p>Private Room · Double Sharing · Triple Sharing</p>
        </div>

        {/* Price and Button */}
        <div className="mt-4 flex justify-between items-center">
          <p className="text-gray-400 font-bold">{price}/- month</p>
          <a
            href="#form"
            className="bg-[#dd0000] text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default Kard;
