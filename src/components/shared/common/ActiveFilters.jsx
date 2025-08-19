import React from "react";

const ActiveFilters = ({ filters, onRemove, onClear }) => {
  const active = [];
  Object.entries(filters).forEach(([type, values]) => {
    values.forEach(value => active.push({ type, value }));
  });

  if (active.length === 0) return null;

  return (
    <div className="mb-4 flex flex-wrap gap-2 items-center">
      <span className="text-sm font-semibold text-gray-700 dark:text-white">Active Filters:</span>
      {active.map(({ type, value }, idx) => (
        <div
          key={idx}
          className="flex items-center bg-gray-200 dark:bg-gray-700 text-sm text-gray-800 dark:text-white rounded-full px-3 py-1"
        >
          {value}
          <button
            onClick={() => onRemove(type, value)}
            className="ml-2 text-red-500 hover:text-red-700 font-bold"
          >
            ✕
          </button>
        </div>
      ))}
      <button
        onClick={onClear}
        className="ml-4 text-sm text-blue-600 hover:underline"
      >
        Clear All
      </button>
    </div>
  );
};

export default ActiveFilters;
