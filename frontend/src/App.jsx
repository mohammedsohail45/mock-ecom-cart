import React, { useState } from "react";
import Products from "./Products";
import CartPage from "./CartPage";
import "./styles.css";

const App = () => {
  const [cart, setCart] = useState([]);

  
  const handleCartUpdate = (updateFn) => {
    setCart((prevCart) => {
      const updatedCart = typeof updateFn === "function" ? updateFn(prevCart) : updateFn;
      return updatedCart;
    });
  };

  return (
    <div className="app-container">
      <h1>
        🛒 <span className="title">Mock E-Commerce Cart</span>
      </h1>

      <Products onCartUpdate={handleCartUpdate} />
      <CartPage cart={cart} setCart={setCart} />
    </div>
  );
};

export default App;

