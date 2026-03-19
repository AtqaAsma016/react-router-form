import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p className="about-lead">
        Web3 Shopping Cart is a decentralized storefront built on Binance Smart Chain.
        We believe commerce should be trustless, transparent, and global.
      </p>

      <div className="about-grid">
        <div className="about-block">
          <h3>Our Mission</h3>
          <p>
            Empower buyers and creators to transact freely using blockchain technology —
            no banks, no borders, no friction.
          </p>
        </div>
        <div className="about-block">
          <h3>Technology</h3>
          <p>
            Built with React, React Router, and integrates with MetaMask and other
            Web3 wallets using BNB (Binance Coin) as the payment currency.
          </p>
        </div>
        <div className="about-block">
          <h3>Contact</h3>
          <p>
            Questions? Reach us through the Contact page. We typically respond
            within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;