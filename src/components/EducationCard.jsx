import React from "react";

const EducationCard = ({ title, location, degree, cgpa, detailsTitle, details }) => (
  <div className="bg-white rounded-xl shadow-md p-6 m-4 w-full md:w-[45%]">
    <h3 className="text-teal-700 font-semibold text-xl mb-1">{title}</h3>
    <p className="text-sm text-gray-600 mb-2">{location}</p>
    <p><strong>Degree:</strong> {degree}</p>
    <p><strong>CGPA:</strong> {cgpa}</p>
    <p className="mt-3 font-semibold">{detailsTitle}:</p>
    <ul className="list-disc list-inside text-sm text-gray-700">
      {details.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default EducationCard;
