"use client";

import { useState } from "react";

export default function Home() {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    { id: 1, title: "STRENGTH", image: "/ayurveda-nodejs/images/strength.jpg" },
    { id: 2, title: "MOBILITY", image: "/ayurveda-nodejs/images/mobility.jpg" },
    { id: 3, title: "DRILLS", image: "/ayurveda-nodejs/images/drills.jpg" },
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="flex w-[80%] h-[50%] overflow-hidden">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`relative flex-1 h-full bg-cover bg-center transition-all duration-300 ${
              hoveredSection === section.id || expandedSection === section.id
                ? "flex-[3]"
                : "flex-1"
            } ${
              index === 0
                ? "rounded-l-3xl" // Increased radius for leftmost image
                : index === sections.length - 1
                ? "rounded-r-3xl" // Increased radius for rightmost image
                : ""
            }`}
            style={{ backgroundImage: `url(${section.image})` }}
            onMouseEnter={() => {
              setHoveredSection(section.id);
              setExpandedSection(section.id);
            }}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="absolute top-4 left-4 text-white text-3xl font">
              {/* Increased font size */}
              {section.title}
            </div>
            {hoveredSection === section.id && (
              <div className="absolute top-4 right-4">
                {/* Circle around the arrow */}
                <div className="w-10 h-10 flex items-center justify-center bg-white text-black text-xl rounded-full shadow-lg">
                  ➔
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
