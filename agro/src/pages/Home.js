// src/pages/Home.js
import React from 'react';
import './Home.css';
const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to AgriFinds</h1>
        <p className="subtitle">Your go-to solution for modern agriculture management.</p>
      </header>
      <div className="description-box">
        <p className="description">
          At Agrominds, we provide innovative solutions to enhance agricultural productivity and sustainability.
          Explore our range of products and schemes tailored to meet the needs of modern farmers. Join us in
          revolutionizing agriculture for a better tomorrow. 
        </p>
      </div>
      <section className="features">
        <div className="feature">
          <h2>Innovative Schemes</h2>
          <p>Discover our cutting-edge schemes for boosting agricultural productivity.</p>
          <a href="/schemes" className="btn-secondary">Learn More</a>
        </div>
        <div className="feature">
          <h2>Quality Products</h2>
          <p>Explore a wide range of high-quality agricultural products.</p>
          <a href="/products" className="btn-secondary">Shop Now</a>
        </div>
        <div className="feature">
          <h2>Expert Support</h2>
          <p>Get advice and support from our agricultural experts.</p>
          <a href="/experts" className="btn-secondary">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default Home;