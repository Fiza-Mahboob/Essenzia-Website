import React from "react";

const HeroSec = ({ title, subtitle}) => {
  return (
    <section
      className="relative w-full h-64 md:h-72 lg:h-80 flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url("/media/images/SC-Hero.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark/Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 backdrop-brightness-75"></div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
        {subtitle && (
          <p className="text-base md:text-lg text-gray-200">{subtitle}</p>
        )}
      </div>
    </section>
  );
};

export default HeroSec;
