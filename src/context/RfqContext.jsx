import React, { createContext, useContext, useState, useEffect } from "react";

const RfqContext = createContext();

export function RfqProvider({ children }) {
  const [rfqItems, setRfqItems] = useState(() => {
    try {
      const saved = localStorage.getItem("panorama_rfq_items");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [isRfqOpen, setIsRfqOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("panorama_rfq_items", JSON.stringify(rfqItems));
    } catch (e) {
      console.error(e);
    }
  }, [rfqItems]);

  const addToRfq = (product, quantity = 1000) => {
    setRfqItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setIsRfqOpen(true);
  };

  const removeFromRfq = (productId) => {
    setRfqItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromRfq(productId);
      return;
    }
    setRfqItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearRfq = () => {
    setRfqItems([]);
  };

  return (
    <RfqContext.Provider
      value={{
        rfqItems,
        addToRfq,
        removeFromRfq,
        updateQuantity,
        clearRfq,
        isRfqOpen,
        setIsRfqOpen,
      }}
    >
      {children}
    </RfqContext.Provider>
  );
}

export function useRfq() {
  const context = useContext(RfqContext);
  if (!context) {
    throw new Error("useRfq must be used within an RfqProvider");
  }
  return context;
}
