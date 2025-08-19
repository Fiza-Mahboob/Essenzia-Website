import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const getLocalStorage = (key, fallback = []) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : fallback;
};

export const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => getLocalStorage('cartItems'));
  const [wishlistItems, setWishlistItems] = useState(() => getLocalStorage('wishlistItems'));
  const [message, setMessage] = useState(null);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 2500);
  };

  const addToCart = (product) => {
    const alreadyInCart = cartItems.some((item) => item.id === product.id);
    if (alreadyInCart) {
      showMessage('Already Added to Cart!');
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      showMessage('Added to Cart!');
    }
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addToWishlist = (product) => {
    const alreadyInWishlist = wishlistItems.some((item) => item.id === product.id);
    if (alreadyInWishlist) {
      showMessage('Already Added to Wishlist!');
    } else {
      setWishlistItems([...wishlistItems, product]);
      showMessage('Added to Wishlist!');
    }
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };
 
  const moveWishlistToCart = (ids) => {
    const itemsToMove = wishlistItems.filter((item) => ids.includes(item.id));
    const updatedCart = [...cartItems];

    itemsToMove.forEach((item) => {
      if (!updatedCart.find((c) => c.id === item.id)) {
        updatedCart.push({ ...item, quantity: 1 });
      }
    });

    setCartItems(updatedCart);
    setWishlistItems((prev) => prev.filter((item) => !ids.includes(item.id)));
    showMessage('Moved to Cart!');
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        moveWishlistToCart,
        message,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};