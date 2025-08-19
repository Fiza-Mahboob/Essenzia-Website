import React from 'react';
import { motion } from 'framer-motion';
import bgImage from '../../assets/banner-bg.jpg'; // ✅ Use a luxury-themed image

const BannerSection = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-14 bg-white dark:bg-bg-dk  pt-14 pb-2">
  <div
    className="relative rounded-lg overflow-hidden h-[55vh] sm:h-[60vh] lg:h-[75vh] bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-text-primary px-4 sm:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-text-primary dark:text-accent-dk"
      >
        Embrace the Luxury Within
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl max-w-xl mb-4 text-text-secondary dark:text-text-secondary"
      >
        Every fragrance tells a tale — let yours be timeless, bold, and beautifully unforgettable.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-base sm:text-lg md:text-xl max-w-xl mb-6 text-text-secondary dark:text-text-secondary"
      >
        Starting From: <span className="text-gold dark:text-accent-dk font-semibold">$45.00</span>
      </motion.p>

      <motion.a
        href="/shop"
        className="inline-block border-2 border-gold dark:border-accent-dk text-gold dark:text-accent-dk px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg rounded-full font-semibold hover:bg-gold hover:text-white dark:hover:bg-accent-dk transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Explore Us
      </motion.a>
    </div>
  </div>
</section>

  );
};

export default BannerSection;
