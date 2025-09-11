// src/components/Stats.jsx
import React from "react";
import CountUp from "react-countup";

const statsData = [
  { id: 1, number: 874, label: "Happy Clients", color: "bg-orange-400" },
  { id: 2, number: 748, label: "Projects Done", color: "bg-indigo-600" },
  { id: 3, number: 369, label: "Cup Of Coffee", color: "bg-teal-500" },
  { id: 4, number: 584, label: "Skill Services", color: "bg-purple-600" },
];

const Stats = () => {
  return (
    // Removed the py-14 from here to allow for cleaner spacing control from the parent component
    <div className="py-10 md:py-14"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {statsData.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              <p className="text-4xl lg:text-5xl font-bold font-heading mb-2">
                <CountUp end={stat.number} suffix="+" duration={2} enableScrollSpy={true} scrollSpyOnce={true} />
              </p>
              <p className="text-gray-600 text-sm sm:text-base">{stat.label}</p>
              <div className={`mt-4 w-full h-1.5 rounded-full ${stat.color} shadow-lg`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;