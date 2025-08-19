import React from 'react';
import { motion } from 'framer-motion';
import perfumeImage from '../../assets/Perfume.png';
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
};
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};
const bounceButton = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.175, 0.885, 0.32, 1.275],
      delay: 0.9,
    },
  },
};
const HeroSection = () => {
  return (
    <section className="relative bg-hero-bg dark:bg-bg-dark text-text-primary dark:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-14 px-6 md:px-16 py-24 lg:py-32">

        {/* LEFT TEXT */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl sm:text-6xl font-bold leading-tight mb-6"
            variants={fadeUp}
          >
            Timeless <span className="text-gold dark:text-accent-dk">Fragrance</span><br />For Every Soul
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0"
            variants={fadeUp}
          >
            Immerse yourself in scents crafted to inspire elegance, confidence, and unforgettable presence.
          </motion.p>

          <motion.a
            href="/shop"
            className="inline-block bg-gold dark:bg-accent-dk text-white px-8 py-4 text-lg rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            variants={bounceButton}
          >
            Shop Now
          </motion.a>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-1 w-full relative"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          <motion.img
            src={perfumeImage}
            alt="Essenzia Perfume"
            className="w-full max-w-md mx-auto drop-shadow-2xl scale-130"
            whileHover={{ rotate: [0, 1, -1, 0], scale: 1.05 }}
            animate={{
              y: [0, -8, 0],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            }}
          />
        </motion.div>
      </div>

      {/* GLOWING BACKGROUND DECORATION */}
      <div className="absolute w-96 h-96 bg-gold  opacity-20 rounded-full blur-3xl top-10 -left-32 hidden lg:block z-0"></div>
      <div className="absolute w-80 h-80 bg-rose-300 opacity-13 rounded-full blur-3xl bottom-0 -right-20 hidden lg:block z-0"></div>
    </section>
  );
};

export default HeroSection;
