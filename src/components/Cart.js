import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems, clearCart }) => {
  const total = cartItems
    .reduce((sum, item) => sum + parseFloat(item.price), 0)
    .toFixed(4);

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty">
          <div className="empty-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Head to the store and add some items!</p>
          <Link to="/store" className="go-store-btn">Go to Store</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Your Cart</h1>
        <p className="cart-count-label">{cartItems.length} item{cartItems.length > 1 ? 's' : ''}</p>

        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <div
                className="item-dot"
                style={{ background: item.accentColor }}
              />
              <span className="item-name">{item.name}</span>
              <span className="item-price" style={{ color: item.accentColor }}>
                {item.price} {item.currency}
              </span>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Total</span>
            <span className="total-value">{total} BNB</span>
          </div>

          <button className="checkout-btn">
            Checkout with Wallet
          </button>
          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;