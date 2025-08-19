import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, moveWishlistToCart, message } = useAppContext();
  const [selected, setSelected] = useState([]);

  const handleCheckbox = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const handleMove = () => {
    if (selected.length > 0) {
      moveWishlistToCart(selected);
      setSelected([]);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-bg-dk px-6 ">
      <h2 className="text-4xl font-bold mb-4 text-text-primary py-4 dark:text-white">Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p className="text-text-primary dark:text-white px-6">No items in wishlist</p>
      ) : (
        <>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {wishlistItems.map((product) => (
              <div key={product.id} className="border p-4 rounded-md shadow-md bg-card dark:bg-bg-dark">
                <input
                  type="checkbox"
                  checked={selected.includes(product.id)}
                  onChange={() => handleCheckbox(product.id)}
                  className="mb-2"
                />
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
                <h3 className="text-lg font-semibold text-text-primary dark:text-white">{product.name}</h3>
                <p className="text-sm text-text-secondary dark:text-white">${product.price}</p>
                <button
                  className="mt-2 text-red-500 hover:underline"
                  onClick={() => removeFromWishlist(product.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={handleMove}
            disabled={selected.length === 0}
            className="mb-4 mt-5 px-4 py-2 bg-green-500  text-white rounded"
          >
            Add to Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Wishlist;