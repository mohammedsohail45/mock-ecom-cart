import React, { useEffect, useState } from "react";
import "./styles.css";

const Products = ({ onCartUpdate }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        
        const formatted = data.map((p) => ({
          id: p.id,
          name: p.title.length > 40 ? p.title.slice(0, 40) + "..." : p.title,
          price: Math.round(p.price * 80),
          image: p.image,
          category: p.category,
        }));
        setProducts(formatted);
      })
      .catch((err) => {
        console.error("Error loading products:", err);
        alert("Could not load products. Please try again later.");
      });
  }, []);


  const handleAddToCart = (product) => {
    onCartUpdate((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  return (
    <div className="products-section">
      <h2> Products</h2>

      <div className="product-grid">
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-img"
              />
              <h3>{product.name}</h3>
              <p className="category">{product.category}</p>
              <p className="price">₹{product.price}</p>
              <button onClick={() => handleAddToCart(product)}>
                 Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;

