import React from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  );

  if (cart.length === 0) {
    return <div className="center-text">Your cart is empty 😔</div>;
  }

  return (
    <div className="container">
      <h1>Your Shopping Cart</h1>
      
      <div className="cart-grid">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            
            <div className="cart-details">
              <h3>{item.title}</h3>
              <p>
                ${item.price} x {item.quantity}
              </p>
              <p className="subtotal">
                Subtotal: ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>

            <button 
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}