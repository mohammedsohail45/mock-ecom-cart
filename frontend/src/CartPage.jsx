import React from "react";

const CartPage = ({ cart, setCart }) => {
  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-section">
      <h2>🛒 Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>₹{item.price}</td>
                  <td>
                    <button onClick={() => handleRemove(item.id)}>❌</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Total: ₹{total}</h3>

          <div className="checkout">
            <h4>Checkout</h4>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email" />
            <button>Pay Now</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
