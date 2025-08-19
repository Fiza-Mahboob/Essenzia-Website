import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Amira Khalid",
    image: user1,
    review:
      "Essenzia perfumes are beyond amazing. I get compliments every day! The fragrance stays all day without being overpowering.",
    rating: 5,
  },
  {
    id: 2,
    name: "Zayan Ahmed",
    image: user2,
    review:
      "Subtle, elegant, long-lasting. Their Mystic Oud has become my daily go-to. Feels premium and unique.",
    rating: 4,
  },
  {
    id: 3,
    name: "Hira Fatima",
    image: user3,
    review:
      "I've never felt more confident wearing a scent. Essenzia's packaging and fragrance quality are just next level!",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
      className="relative bg-card dark:bg-bg-dark backdrop-blur-xl border border-[#e4dcd1] dark:border-[#444] rounded-lg p-6 pt-16 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-gold dark:hover:border-accent-dk"
    >
      {/* Avatar Floating */}
      <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-20 h-20 object-cover rounded-full border-4 border-gold dark:border-accent-dk shadow-lg"
        />
      </div>

      <div className="text-center mt-4">
        <h3 className="text-lg font-semibold text-dark-grey dark:text-white mb-2">
          {testimonial.name}
        </h3>
        <p className="text-sm text-text-secondary dark:text-gray-300 mb-4 leading-relaxed">
          {testimonial.review}
        </p>

        {/* Star Ratings */}
        <div className="flex justify-center gap-1 text-gold dark:text-accent-dk text-sm">
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: i < testimonial.rating ? 1 : 0.8 }}
              transition={{ delay: i * 0.1 }}
              className={`${i < testimonial.rating ? "opacity-100" : "opacity-30"}`}
            >
              <FaStar />
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const CustomerTestimonials = () => {
  return (
    <section className="bg-white dark:bg-bg-dk py-14 sm:px-10 lg:px-20">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-text-primary dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Beloved Customers
        </motion.h2>
        <motion.p
          className="text-md text-text-secondary dark:text-white mt-3 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hear from the people who made us a part of their daily elegance.
        </motion.p>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.id} testimonial={t} index={i} />
        ))}
      </div>
    </section>
  );
};

export default CustomerTestimonials; 