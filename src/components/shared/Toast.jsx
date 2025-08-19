// Toast.jsx
import React, { useEffect } from 'react';
import { useAppContext } from '../../context/AppContext'; // adjust path if needed

const Toast = () => {
const { message } = useAppContext(); // ✅ Correct key

  // If no message, don't render anything
  if (!message) return null;

  return (
    <div
      className="fixed top-4 right-4 z-50 bg-gold dark:bg-accent-dk text-white px-4 py-2 rounded shadow-lg animate-fade-in-out"
    >
      {message}
    </div>
  );
};

export default Toast;
