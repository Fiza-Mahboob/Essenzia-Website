import React from "react";
import { FaShippingFast, FaShieldAlt, FaFlask, FaLeaf } from "react-icons/fa";

const WhyChoose = [
  {
    icon: <FaShippingFast size={50} className="text-gold dark:text-accent-dk" />,
    title: "Fast & Free Delivery",
    desc: "Delivered to your door with zero shipping cost on all orders.",
  },
  {
    icon: <FaShieldAlt size={50} className="text-gold dark:text-accent-dk" />,
    title: "100% Authentic",
    desc: "We guarantee original perfumes from top global brands.",
  },
  {
    icon: <FaFlask size={50} className="text-gold dark:text-accent-dk" />,
    title: "Long-Lasting Scents",
    desc: "Crafted with premium ingredients for all-day freshness.",
  },
  {
    icon: <FaLeaf size={50} className="text-gold dark:text-accent-dk" />,
    title: "Eco-Friendly Packaging",
    desc: "Sustainable and recyclable materials used with care.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6 sm:px-10 md:px-20 bg-white dark:bg-bg-dk">
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-bold text-text-primary dark:text-white mb-3">
          Why Choose Us
        </h2>
        <p className="text-text-secondary dark:text-white text-md max-w-xl mx-auto">
          We deliver not just perfumes, but experiences — crafted to inspire and impress.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {WhyChoose.map((item, index) => (
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

export default WhyChooseUs;
