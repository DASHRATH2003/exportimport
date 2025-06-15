// src/pages/Shop.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';
import '../styles/animations.css';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('featured');
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Electronics',
      category: 'electronics',
      price: '$15,000',
      image: '/featured1.jpg',
      description: 'High-end electronic components'
    },
    {
      id: 2,
      name: 'Luxury Textiles',
      category: 'textiles',
      price: '$8,000',
      image: '/featured2.jpg',
      description: 'Premium quality fabrics'
    },
    {
      id: 3,
      name: 'Industrial Equipment',
      category: 'machinery',
      price: '$35,000',
      image: '/featured3.jpg',
      description: 'State-of-the-art machinery'
    }
  ];

  const categories = [
    { id: 'featured', name: 'Featured' },
    { id: 'new', name: 'New Arrivals' },
    { id: 'best', name: 'Best Sellers' }
  ];

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="shop-page">
      {/* Hero Section */}
      <section className="shop-hero fade-in">
        <div className="shop-hero-content">
          <h1>Welcome to Our Shop</h1>
          <p>Discover Premium Import-Export Products</p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="shop-categories slide-in-left">
        <div className="container">
          <div className="categories-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn hover-lift ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className={`product-card scale-up delay-${index + 1} hover-lift`}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-overlay">
                    <button className="view-details hover-scale">View Details</button>
                  </div>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="shop-navigation">
            <button 
              className="shop-nav-button prev" 
              onClick={handlePrevPage}
              disabled={currentPage === 0}
            >
              &#8249;
            </button>
            <button 
              className="shop-nav-button next" 
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
            >
              &#8250;
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section fade-in">
        <div className="container">
          <h2>Why Shop With Us</h2>
          <div className="benefits-grid">
            <div className="benefit-card slide-in-left delay-1">
              <i className="fas fa-shipping-fast"></i>
              <h3>Global Shipping</h3>
              <p>Fast and reliable worldwide delivery</p>
            </div>
            <div className="benefit-card slide-in-left delay-2">
              <i className="fas fa-certificate"></i>
              <h3>Quality Assured</h3>
              <p>All products meet international standards</p>
            </div>
            <div className="benefit-card slide-in-left delay-3">
              <i className="fas fa-headset"></i>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="shop-cta fade-in">
        <div className="container">
          <div className="cta-content">
            <h2>Explore Our Full Catalog</h2>
            <p>Browse through our complete collection of products</p>
            <Link to="/all-products" className="cta-button hover-scale">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;