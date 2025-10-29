// backend/server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let products = [
  { id: 1, name: "Wireless Mouse", price: 599 },
  { id: 2, name: "Bluetooth Keyboard", price: 999 },
  { id: 3, name: "Smart Watch", price: 1999 },
  { id: 4, name: "USB Cable", price: 299 },
  { id: 5, name: "Power Bank", price: 1299 }
];

let cart = [];

// GET /api/products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// GET /api/cart
app.get("/api/cart", (req, res) => {
  let detailed = cart.map(item => {
    const product = products.find(p => p.id === item.productId);
    return { ...item, product };
  });
  const total = detailed.reduce((s, it) => s + (it.product.price * it.qty), 0);
  res.json({ items: detailed, total });
});

// POST /api/cart
app.post("/api/cart", (req, res) => {
  const { productId, qty } = req.body;
  const existing = cart.find(c => c.productId === productId);
  if (existing) existing.qty += qty;
  else cart.push({ productId, qty });
  res.json({ message: "Item added", cart });
});

// DELETE /api/cart/:id
app.delete("/api/cart/:id", (req, res) => {
  const id = parseInt(req.params.id);
  cart = cart.filter(c => c.productId !== id);
  res.json({ message: "Item removed", cart });
});

// POST /api/checkout
app.post("/api/checkout", (req, res) => {
  const { cartItems, name, email } = req.body;
  const total = cartItems.reduce((sum, item) => {
    const product = products.find(p => p.id === item.productId);
    return sum + (product.price * item.qty);
  }, 0);
  const receipt = { message: "Checkout successful", total, timestamp: new Date().toISOString(), name, email };
  cart = [];
  res.json(receipt);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
