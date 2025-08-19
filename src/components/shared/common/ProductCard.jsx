import React from "react";
import { FaHeart, FaEye, FaShoppingCart } from "react-icons/fa";
import { useAppContext } from "../../../context/AppContext";

const ProductCard = ({ product }) => {
  const { name, image, price, rating } = product;
  const { addToCart, addToWishlist, message } = useAppContext();

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const full = i <= Math.floor(rating);
      const half = i > Math.floor(rating) && i - rating <= 0.5;
      stars.push(
        <span key={i} className="text-yellow-400 text-base">
          {full ? "★" : half ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="group relative bg-card dark:bg-bg-dark rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <img
          src={image}
          alt={`Image of ${name}`}
          loading="lazy"
          className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
          <button onClick={() => addToCart(product)} className="bg-white p-2 rounded-full">
            <FaShoppingCart size={18} />
          </button>
          <button className="bg-white p-2 rounded-full">
            <FaEye size={18} />
          </button>
          <button onClick={() => addToWishlist(product)} className="bg-white p-2 rounded-full">
            <FaHeart size={18} />
          </button>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold truncate text-text-primary dark:text-white">{name}</h3>
        <div className="flex justify-center items-center mt-2 mb-1 gap-1">
          {renderStars()}
          <span className="text-sm text-text-secondary dark:text-white ml-1">({rating})</span>
        </div>
        <p className="text-lg font-bold text-text-primary dark:text-white">${Number(price).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;