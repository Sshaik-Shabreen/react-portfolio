import React from "react";
import EducationCard from "./EducationCard";

const Education = () => {
  const educationData = [
    {
      title: "IIIT RGUKT RK UNIVERSITY",
      location: "Kadapa(D),Andhrapradesh, India",
      degree: "B.Tech in Computer Science Engineering",
      cgpa: "8.10/10",
      detailsTitle: "Relevant Courseworks",
      details: [
        "Cores",
        "Cloud Computing",
        "Foundations of Algorithms",
      ],
    },
    {
      title: "IIIT RGUKT RK Valley",
      location: "Kadapa(D),Andhrapradesh ",
      degree: "Secondary School",
      cgpa: "8.13/10",
      detailsTitle: "PUC",
      details: [
        "Executive Committee Member",
        "Volunteer",
        "President of Computer Science Club",
      ],
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-teal-700 mb-6">EDUCATION</h1>
      <div className="flex flex-wrap justify-between">
        {educationData.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ))}
      </div>
    </div>
  );
};

export default Education;
