import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-card">
      <div
        className="product-icon"
        style={{ background: product.color }}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
        >
          <rect
            x="8"
            y="18"
            width="32"
            height="22"
            rx="4"
            fill={product.accentColor}
            fillOpacity="0.15"
          />
          <rect
            x="8"
            y="18"
            width="32"
            height="22"
            rx="4"
            stroke={product.accentColor}
            strokeWidth="1.8"
          />
          <circle cx="19" cy="28" r="3.5" fill={product.accentColor} fillOpacity="0.7" />
          <circle cx="29" cy="28" r="3.5" fill={product.accentColor} fillOpacity="0.7" />
          <path
            d="M17 18V14a7 7 0 0 1 14 0v4"
            stroke={product.accentColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <h3 className="product-name">{product.name}</h3>

      <p className="product-price" style={{ color: product.accentColor }}>
        {product.price} {product.currency}
      </p>

      <p className="product-stock">
        {product.stock} units left
      </p>

      <button
        className={`add-btn ${added ? 'added' : ''}`}
        style={added ? { background: '#16a34a' } : {}}
        onClick={handleClick}
        disabled={product.stock === 0}
      >
        {added ? 'ADDED ✓' : 'ADD TO CART'}
      </button>
    </div>
  );
};

export default ProductCard;