// src/sections/FeaturedProducts.jsx
import React from "react";
import ProductCard from "../shared/common/ProductCard";
import perfume1 from "../../assets/perfume.png";
import perfume2 from "../../assets/perfume.webp";



// Sample data
const featuredProducts = [
  {
    id: 1,
    name: "Amber Nights",
    image: perfume1,
    price: "49.99",
    rating: 5,
  },
  {
    id: 2,
    name: "Ocean Breeze",
    image: perfume2,
    price: "39.99",
    rating: 4,
  },
  {
    id: 3,
    name: "Velvet Rose",
    image: "/assets/Perfume.jpg",
    price: "59.99",
    rating: 5,
  },
];

const BestSellers = () => {
  return (
    <section className="bg-white dark:bg-bg-dk px-6 md:px-18 py-13">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary dark:text-white mb-2">
            Signature Scents
          </h2>
          <p className="text-md text-text-secondary dark:text-white">
          Discover our most loved fragrances — timeless, elegant, and unforgettable.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
 {/* Main Box */}
          <div className="relative bg-bg-light dark:bg-bg-dark p-8 sm:p-10 rounded-md shadow-lg z-10 transition duration-300 hover:shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary dark:text-white mb-4">
              Our <span className="text-gold dark:text-accent-dk">Mission</span>
            </h2>
            <p className="text-text-secondary dark:text-white text-lg leading-relaxed tracking-wide">
             At <span className="font-semibold">Essenzia</span>, our mission is to craft exceptional fragrances that
              evoke memories, emotions, and timeless elegance. We strive to
              elevate the everyday experience through scent — making luxury feel
              personal and expressive. We believe that fragrance is not just a product but an intimate extension of one’s identity. Our creations are designed to tell stories — your stories — through curated blends that embody beauty, heritage, and creativity. 
            </p>
          </div>