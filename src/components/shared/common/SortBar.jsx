import React from "react";

const SortBar = ({ sortOption, setSortOption }) => {
  return (
    <div className="flex items-center justify-end gap-4 p-4">
      <label htmlFor="sort" className="text-text-primary dark:text-white font-medium">
        Sort by:
      </label>
      <select
        id="sort"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="border rounded px-3 py-1 focus:outline-none text-text-secondary dark:text-white"
      >
        <option value="default" className="text-text-secondary dark:text-text-primary">None</option>
        <option value="price-low-high" className="text-text-secondary dark:text-text-primary">Price: Low to High</option>
        <option value="price-high-low" className="text-text-secondary dark:text-text-primary">Price: High to Low</option>
        <option value="rating" className="text-text-secondary dark:text-text-primary">Rating</option>
      </select>
    </div>
  );
};

export default SortBar;
