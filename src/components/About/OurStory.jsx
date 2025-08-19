// OurStory.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurStory = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white dark:bg-bg-dk text-text-primary dark:text-white pt-14 pb-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-0" data-aos="fade-down">
          <h3 className="text-5xl font-bold tracking-wide text-text-primary dark:text-white">
            Our Story
          </h3>
          <p className="mt-2 text-text-secondary dark:text-white text-base sm:text-lg">
            Discover the soul behind every scent.
          </p>
        </div>
       
        {/* Grid Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

           
          {/* Image */}
          <div
            className="relative w-full h-72 sm:h-96 md:h-[300px] overflow-hidden rounded-lg shadow-lg group"
            data-aos="zoom-in"
          >
            <img
              src="/media/images/our-story.jpg"
              alt="Essenzia Crafting"
              className="w-full h-full object-cover transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-80 transition duration-500 rounded-lg" />
          </div>

          {/* Text Content */}
          < div className="space-y-5" data-aos="fade-left">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-snug text-text-primary dark:text-white">
              Crafted with <span className="text-gold dark:text-accent-dk">Purpose</span>, Inspired by <span className="text-gold dark:text-accent-dk">Emotion</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-text-secondary dark:text-white/90">
              At <strong>ESSENZIA</strong>, we believe every scent is a story waiting to be told. What began as an obsession with purity and elegance has grown into a movement of mindful fragrance lovers around the globe.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-text-secondary dark:text-white/90">
              Our fragrances are handcrafted to spark connection — with your memories, with your mood, and with your most confident self. Because you're not just wearing a perfume — you're wearing a moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
