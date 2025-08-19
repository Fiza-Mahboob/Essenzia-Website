import React from "react";

const FilterSidebar = ({ filters, onFilterChange }) => {
  const priceOptions = [
    { label: "Under $50", value: "0-49.99" },
    { label: "$50 - $100", value: "50-100" },
    { label: "$100 - $200", value: "100-200" },
    { label: "Above $200", value: "200-10000" },
  ];

  return (
    <aside className="w-full md:w-64 bg-white dark:bg-gray-900 border dark:border-gray-700 p-4 rounded-md shadow-sm">
      {/* Category */}
      <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
        Categories
      </h2>
      {["Men", "Women", "Kids", "Unisex"].map((cat) => (
        <label key={cat} className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
          <input
            type="checkbox"
            checked={filters.category.includes(cat)}
            onChange={() => onFilterChange("category", cat)}
            className="mr-2 accent-blue-500"
          />
          {cat}
        </label>
      ))}

      {/* Price */}
      <h2 className="mt-6 text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Price</h2>
      {priceOptions.map(({ label, value }) => (
        <label key={value} className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
          <input
            type="checkbox"
            checked={filters.price.includes(value)}
            onChange={() => onFilterChange("price", value)}
            className="mr-2 accent-blue-500"
          />
          {label}
        </label>
      ))}

      {/* Sizes */}
      <h2 className="mt-6 text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Sizes</h2>
      {["XS", "S", "M", "L", "XL"].map((size) => (
        <label key={size} className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
          <input
            type="checkbox"
            checked={filters.size.includes(size)}
            onChange={() => onFilterChange("size", size)}
            className="mr-2 accent-blue-500"
          />
          {size}
        </label>
      ))}

      {/* Colors */}
      <h2 className="mt-6 text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Colors</h2>
      {["black", "white", "red", "blue", "green"].map((color) => (
        <label key={color} className="block text-sm mb-1 capitalize text-gray-700 dark:text-gray-300">
          <input
            type="checkbox"
            checked={filters.color.includes(color)}
            onChange={() => onFilterChange("color", color)}
            className="mr-2 accent-blue-500"
          />
          {color}
        </label>
      ))}
    </aside>
  );
};

export default FilterSidebar;
