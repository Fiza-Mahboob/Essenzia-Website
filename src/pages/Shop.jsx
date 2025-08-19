import React, { useEffect, useState } from "react";
import HeroSec from "../components/shared/common/HeroSec";
import FilterSidebar from "../components/shared/common/FiltersSidebar";
import ActiveFilters from "../components/shared/common/ActiveFilters";
import ProductCard from "../components/shared/common/ProductCard";

import SortBar from "../components/shared/common/SortBar";
import { FaFilter } from "react-icons/fa";
import productsData from "../data/products";

const Shop = () => {
  const [filters, setFilters] = useState({
    category: [], price: [], size: [], color: []
  });
  const [sortOption, setSortOption] = useState("default");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onFilterChange = (type, value) => {
    setFilters(prev => {
      const cur = prev[type];
      return {
        ...prev,
        [type]: cur.includes(value) ? cur.filter(v => v !== value) : [...cur, value]
      };
    });
  };

  useEffect(() => {
  setLoading(true); // Start loading

  setTimeout(() => {
    let filtered = [...productsData];

    if (filters.category.length) {
      filtered = filtered.filter(p => filters.category.includes(p.category));
    }
    if (filters.size.length) {
      filtered = filtered.filter(p => filters.size.includes(p.size));
    }
    if (filters.color.length) {
      filtered = filtered.filter(p => filters.color.includes(p.color));
    }
    if (filters.price.length) {
      filtered = filtered.filter(p =>
        filters.price.some(r => {
          const [min, max] = r.split("-").map(Number);
          return p.price >= min && p.price <= max;
        })
      );
    }

    switch (sortOption) {
      case "price-low-high":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
    setShowAll(false);
    setLoading(false); // Done loading
  }, 400); // Slight delay to visualize loading state
}, [filters, sortOption]);



  return (
    <div className="min-h-screen bg-white dark:bg-bg-dk">
      <HeroSec
        title="Shop The Collection"
        subtitle="Discover our latest fashion pieces tailored for everyone."
      />

      {/* Top Controls Row */}
<div className="flex justify-between items-center px-4 mt-4 lg:hidden sticky top-[4.5rem] bg-white dark:bg-bg-dk z-30 py-2 shadow-sm">
        <button
          onClick={() => setSidebarOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-gold dark:bg-accent-dk text-white rounded"
        >
          <FaFilter /> Filters
        </button>
        <SortBar sortOption={sortOption} setSortOption={setSortOption} />
      </div>

<div className="max-w-7xl mx-auto px-4 py-6 lg:flex lg:gap-6">
        {/* Sidebar for small screens */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div
              className="fixed inset-0 bg-black opacity-50"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="relative w-64 bg-white dark:bg-gray-900 p-4 shadow-lg overflow-y-auto">
              <button
                onClick={() => setSidebarOpen(false)}
                className="absolute top-2 right-2 text-red-600"
              >
                ✕
              </button>
              <FilterSidebar filters={filters} onFilterChange={onFilterChange} />
            </div>
          </div>
        )}

        {/* Sidebar for medium+ screens */}
<div className="hidden lg:block lg:w-64 lg:sticky lg:top-[5rem]">
          <FilterSidebar filters={filters} onFilterChange={onFilterChange} />
        </div>

        {/* Product listing */}
        <div className="flex-1">
          {/* Desktop SortBar */}
<div className="hidden lg:flex justify-end mb-4">
            <SortBar sortOption={sortOption} setSortOption={setSortOption} />
          </div>
{/* Active Filters */}
  <ActiveFilters
    filters={filters}
    onRemove={(type, value) =>
      setFilters(prev => ({
        ...prev,
        [type]: prev[type].filter(v => v !== value)
      }))
    }
    onClear={() =>
      setFilters({ category: [], price: [], size: [], color: [] })
    }
  />


          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
     {loading ? (
  <p className="text-center col-span-full text-gray-500">Loading...</p>
) : filteredProducts.length ? (
  (showAll ? filteredProducts : filteredProducts.slice(0, 9)).map(product => (
    <ProductCard key={product.id} product={product} />
  ))
) : (
  <div className="text-center col-span-full mt-8">
    <p className="text-text-primary dark:text-white mb-4">No products found with selected filters.</p>
    <button
      onClick={() => setFilters({ category: [], price: [], size: [], color: [] })}
      className="px-4 py-2 bg-gold dark:bg-accent-dk text-white rounded hover:text-black transition"
    >
      Reset Filters
    </button>
  </div>
)}


          </div>
          {!showAll && filteredProducts.length > 9 && (
  <div className="text-center mt-6">
    <button
      onClick={() => setShowAll(true)}
      className="px-6 py-2 bg-gold  dark:bg-accent-dk text-white rounded dark:hover:bg-accent transition"
    >
      Show All
    </button>
  </div>
)}

        </div>
      </div>
    </div>
  );
};

export default Shop;
