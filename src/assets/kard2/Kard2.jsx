import React from "react";

const Kard2 = ({ image, title, location, price }) => {
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

        {/* Price and Button */}
        <div className="mt-4 flex justify-between items-center">
          <p className="text-gray-400 font-bold">Starting Price -{price} </p>
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

export default Kard2;
