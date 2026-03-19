import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './Store.css';

const PRODUCTS = [
  {
    id: 1,
    name: 'Donate',
    price: '0.0001',
    currency: 'BNB',
    stock: 4,
    category: 'Charity',
    color: '#ede9fe',
    accentColor: '#7c3aed',
  },
  {
    id: 2,
    name: 'Test1',
    price: '0.0002',
    currency: 'BNB',
    stock: 7,
    category: 'Digital',
    color: '#fff7ed',
    accentColor: '#f97316',
  },
  {
    id: 3,
    name: 'Test2',
    price: '0.0003',
    currency: 'BNB',
    stock: 2,
    category: 'Digital',
    color: '#f0fdf4',
    accentColor: '#16a34a',
  },
];

const Store = ({ addToCart }) => {
  const [toast, setToast] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...new Set(PRODUCTS.map((p) => p.category))];

  const filtered =
    activeFilter === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeFilter);

  const handleAddToCart = (product) => {
    addToCart(product);
    setToast(`${product.name} added to cart!`);
    setTimeout(() => setToast(''), 2500);
  };

  return (
    <div className="store-page">
      <div className="store-hero">
        <h1>Store</h1>
        <p>Buy web3 products</p>
      </div>

      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
};

export default Store;