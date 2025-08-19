import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { toast } from "react-hot-toast";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useAppContext();
  const [selectedItems, setSelectedItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const total = selectedItems.reduce((sum, itemId) => {
    const item = cartItems.find((i) => i.id === itemId);
    return item ? sum + item.price * item.quantity : sum;
  }, 0);

  const toggleSelect = (itemId) => {
    setSelectedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handlePlaceOrder = () => {
   toast.success("Order placed successfully!");
setTimeout(() => setShowModal(false), 100); // Give toast time to trigger

    setSelectedItems([]); // Clear selected after placing order
  };

  return (
    <div className="p-6 min-h-screen bg-white dark:bg-bg-dk px-6">
      <h2 className="text-4xl font-bold mb-4 text-text-primary dark:text-white py-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-text-primary dark:text-white px-6">No items in cart</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <input
                type="checkbox"
                className="mr-3"
                checked={selectedItems.includes(item.id)}
                onChange={() => toggleSelect(item.id)}
              />
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
              <div className="flex-1 ml-4">
                <h3 className="font-semibold text-text-primary dark:text-white">{item.name}</h3>
                <p className="text-text-secondary dark:text-white">${item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                    className="px-2 py-1 border text-text-primary dark:text-white"
                  >-</button>
                  <span className="px-4 text-text-primary dark:text-white">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 border text-text-primary dark:text-white"
                  >+</button>
                </div>
              </div>
              <button className="text-red-500 hover:underline" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          {/* Buy Now button */}
          {selectedItems.length > 0 && (
            <div className="text-right mt-6">
              <button
                onClick={() => setShowModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Buy Now
              </button>
            </div>
          )}

          <div className="mt-4 text-right font-bold text-xl text-text-primary dark:text-white">
            Cart Total: ${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
            <h2 className="text-2xl font-semibold mb-4 text-center">Order Summary</h2>
            <ul className="space-y-2 max-h-60 overflow-y-auto">
              {selectedItems.map((id) => {
                const item = cartItems.find((i) => i.id === id);
                return (
                  <li key={id} className="flex justify-between">
                    <span>{item?.name}</span>
                    <span>x{item?.quantity}</span>
                    <span>${(item?.price * item?.quantity).toFixed(2)}</span>
                  </li>
                );
              })}
            </ul>
            <div className="text-right font-bold mt-4">Total: ${total.toFixed(2)}</div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handlePlaceOrder}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
