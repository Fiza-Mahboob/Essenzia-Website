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
    image: "/media/images/p1.jpg",
    price: "49.99",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Ocean Breeze",
    image: "/media/images/p2.jpg",
    price: "39.99",
    rating: 4,
  },
  {
    id: 3,
    name: "Velvet Rose",
    image: "/media/images/p3.jpg",
    price: "59.99",
    rating: 5,
  },
  {
    id: 4,
    name: "Mystic Oud",
    image: "/media/images/p19.jpg",
    price: "54.99",
    rating: 4,
  },
  {
    id: 5,
    name: "Citrus Bloom",
    image: "/media/images/p22.jpg",
    price: "44.99",
    rating: 3,
  },
  {
    id: 6,
    name: "Vanilla Sky",
    image: "/media/images/p9.jpg",
    price: "42.99",
    rating: 5,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-white dark:bg-bg-dk px-6 md:px-18 py-13">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary dark:text-white mb-2">
            Featured Collection
          </h2>
          <p className="text-md text-text-secondary dark:text-white">
            Explore the finest fragrances chosen just for you.
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

export default FeaturedProducts;
