import React from "react";
import menImg from "../../assets/category-men.jpg";
import womenImg from "../../assets/category-women.jpg";
import unisexImg from "../../assets/category-unisex.jpg";
import kidsImg from "../../assets/category-kids.webp";

const CategoryCard = ({ name, image, link }) => {
  return (
    <a
      href={link}
      className="relative group overflow-hidden rounded-lg shadow-lg"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 group-hover:scale-105 transition duration-300"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md group-hover:tracking-wider transition-all duration-300">
          {name}
        </h3>
      </div>
    </a>
  );
};

const ShopByCategory = () => {
  return (
    <section className="py-2 px-4 sm:px-8 lg:px-16 bg-white dark:bg-bg-dk">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-text-primary dark:text-white">
          Shop by Category
        </h2>
        <p className="text-md text-text-secondary dark:text-white mt-3">
          Discover fragrances for every age and style.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
        {/* Men */}
        <div className="lg:col-span-1">
          <CategoryCard name="Men" image={menImg} link="/category/men" />
        </div>

        {/* Women - double width on large screens */}
        <div className="lg:col-span-2">
          <CategoryCard name="Women" image={womenImg} link="/category/women" />
        </div>

        {/* Unisex */}
        <div className="lg:col-span-1 lg:row-span-2">
          <CategoryCard name="Unisex" image={unisexImg} link="/category/unisex" />
        </div>

        {/* Kids - full width on small, normal on large */}
        <div className="lg:col-span-3">
          <CategoryCard name="Kids" image={kidsImg} link="/category/kids" />
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
