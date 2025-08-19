import React from "react";
import {
  FaHandsHelping,
  FaLightbulb,
  FaFire,
  FaBalanceScale,
} from "react-icons/fa";

const CoreValues = [
  {
    icon: <FaHandsHelping size={50} className="text-gold dark:text-accent-dk" />,
    title: "Collaboration",
    desc: "We believe in teamwork and supporting one another to achieve shared goals.",
  },
  {
    icon: <FaLightbulb size={50} className="text-gold dark:text-accent-dk" />,
    title: "Innovation",
    desc: "We constantly evolve by embracing creativity and forward-thinking ideas.",
  },
  {
    icon: <FaFire size={50} className="text-gold dark:text-accent-dk" />,
    title: "Passion",
    desc: "We bring energy, focus, and dedication into everything we create.",
  },
  {
    icon: <FaBalanceScale size={50} className="text-gold dark:text-accent-dk" />,
    title: "Integrity",
    desc: "We uphold honesty, fairness, and accountability in all our relationships.",
  },
];


const OurCoreValues = () => {
  return (
    <section className="pb-28  px-6 sm:px-10 md:px-20 bg-white dark:bg-bg-dk">
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-bold text-text-primary dark:text-white mb-3">
          Our Core Values

        </h2>
        <p className="text-text-secondary dark:text-white text-md max-w-xl mx-auto">
          We deliver not just perfumes, but experiences — crafted to inspire and impress.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {CoreValues.map((item, index) => (
          <div
            key={index}
            className="group transition-all duration-300 hover:scale-[1.03]"
          >
            <div className="flex justify-center mb-5">{item.icon}</div>
            <h3 className="text-xl font-semibold text-text-primary dark:text-white group-hover:text-primary transition">
              {item.title}
            </h3>
            <p className="text-sm text-text-secondary dark:text-white mt-2 max-w-xs mx-auto">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCoreValues;
