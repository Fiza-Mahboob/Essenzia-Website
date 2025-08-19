import React from "react";

const AboutHero = () => {
  return (
    <section className="relative w-full h-screen md:h-[88vh] bg-black ">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/media/videos/about-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50  z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4 animate-fadeInUp">
           The Art of Fragrance,<br className="hidden sm:block" />
          The Essence of You
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl animate-fadeInUp delay-200">
          At Essenzia, we craft more than perfumes — we bottle emotions, memories, and identities. Discover the story behind every scent.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
