import axios from "axios";

const API_BASE = "https://fakestoreapi.com";

export async function getProducts() {
  try {
    const res = await axios.get(`${API_BASE}/products?limit=5`);
    return res.data.map((item) => ({
      id: item.id,
      name: item.title,
      price: Math.round(item.price * 80), 
    }));
  } catch (err) {
    alert(" Could not load products from API. Showing fallback data.");
    return [
      { id: 1, name: "Wireless Mouse", price: 599 },
      { id: 2, name: "Bluetooth Keyboard", price: 999 },
      { id: 3, name: "Smart Watch", price: 1999 },
      { id: 4, name: "USB Cable", price: 299 },
      { id: 5, name: "Power Bank", price: 1299 },
    ];
  }
}

export async function getCart() {
  try {
    const res = await axios.get("http://localhost:5000/api/cart");
    return res.data;
  } catch (err) {
    alert("Could not load cart. Please try again.");
    return { items: [], total: 0 };
  }
}

export async function addToCart(productId, qty = 1) {
  const res = await axios.post("http://localhost:5000/api/cart", { productId, qty });
  return res.data;
}

export async function removeFromCart(id) {
  const res = await axios.delete(`http://localhost:5000/api/cart/${id}`);
  return res.data;
}

export async function checkout(cartItems) {
  const res = await axios.post("http://localhost:5000/api/checkout", { cartItems });
  return res.data;
}

