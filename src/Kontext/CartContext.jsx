import { createContext, useContext, useEffect, useState } from "react";

// Skapar en global kontext för kundvagnen
const CartContext = createContext();

export function CartProvider({ children }) {
  // Hämtar sparad kundvagn från localStorage vid första renderingen
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : []; // Om ingen finns, börja med tom array
  });

  // Sparar kundvagnen till localStorage varje gång cartItems ändras
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Funktion för att lägga till vara – ökar kvantiteten om varan redan finns
  function addToCart(item) {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, item]; // Lägger till ny vara
      }
    });
  }

  // Funktion för att ta bort en vara helt från kundvagnen
  function removeFromCart(itemId) {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  }

  // Ökar kvantiteten på en specifik vara
  function increaseQuantity(id) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  // Minskar kvantiteten och tar bort varan om kvantiteten når 0
  function decreaseQuantity(id) {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Tar bort om kvantitet < 1
    );
  }

  // Tömmer hela kundvagnen och rensar localStorage
  function clearCart() {
    setCartItems([]);
    localStorage.removeItem("cart");
  }

  // Tillgängliggör alla funktioner och data till resten av appen
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook för att enkelt använda CartContext i andra komponenter
export function useCart() {
  return useContext(CartContext);
}
