import React from "react";

const Section = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-md p-6 my-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
    <div className="flex flex-wrap justify-center">
      {children}
    </div>
  </div>
);

export default Section;
