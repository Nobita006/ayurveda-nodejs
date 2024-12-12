"use client";

import { useState } from "react";

export default function Home() {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    { id: 1, title: "STRENGTH", image: "/images/strength.jpg" },
    { id: 2, title: "MOBILITY", image: "/images/mobility.jpg" },
    { id: 3, title: "DRILLS", image: "/images/drills.jpg" },
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
                ? "rounded-l-lg"
                : index === sections.length - 1
                ? "rounded-r-lg"
                : ""
            }`}
            style={{ backgroundImage: `url(${section.image})` }}
            onMouseEnter={() => {
              setHoveredSection(section.id);
              setExpandedSection(section.id);
            }}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="absolute top-4 left-4 text-white text-lg font-bold">
              {section.title}
            </div>
            {hoveredSection === section.id && (
              <div className="absolute top-4 right-4 text-white text-xl">➔</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
