import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-hero">
        <h1>Welcome to Web3 Store</h1>
        <p>
          Discover and purchase exclusive web3 digital products.
          <br />
          Payments powered by Binance Smart Chain (BNB).
        </p>
        <Link to="/store" className="hero-btn">Browse Store →</Link>
      </div>

      <div className="home-features">
        <div className="feature-card">
          <div className="feature-icon">🔗</div>
          <h3>On-Chain Payments</h3>
          <p>Pay directly with BNB — no middleman, full ownership.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🛒</div>
          <h3>Easy Cart</h3>
          <p>Add multiple items and checkout in one transaction.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Instant Delivery</h3>
          <p>Digital goods delivered the moment your tx confirms.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;