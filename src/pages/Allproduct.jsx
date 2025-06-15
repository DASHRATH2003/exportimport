// src/pages/AllProducts.jsx
import React, { useState, useEffect } from 'react';
import './Allproduct.css';
import '../styles/animations.css';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

// Import all spice images
import cardamomSmall from '../assets/cardamom.jpg';
import cardamomLarge from '../assets/cardamomlarge.webp';
import pepper from '../assets/pepper.jpg';
import birdsEyeChilli from '../assets/Chili.jpg';
import capsicum from '../assets/Capsicum.webp';
import chilli from '../assets/chilli.webp';
import paprika from '../assets/paprika.webp';
import ginger from '../assets/Ganger.jpg';
import turmeric from '../assets/turemeric.jpg';
import coriander from '../assets/coriyande.jpg';
import cumin from '../assets/Cumin.jpg';
import fennel from '../assets/Fennel.jpeg';
import fenugreek from '../assets/Fenugreek.webp';
import celery from '../assets/Celery.jpg';
import aniseed from '../assets/Aniseed.webp';
import ajowan from '../assets/Ajowan (Ajwain).jpg';
import caraway from '../assets/Caraway.webp';
import dill from '../assets/Dill.jpg';
import cinnamon from '../assets/Cinnamon.webp';
import cassia from '../assets/Cassia.webp';
import garlic from '../assets/Garlic.webp';
import curry from '../assets/Curry Leaf.jpeg';
import kokam from '../assets/Kokam.jpg';
import mint from '../assets/Mint.jpg';
import mustard from '../assets/Mustard.png';
import parsley from '../assets/Parsley.webp';
import pomegranate from '../assets/Pomegranate Seed.jpg';
import saffron from '../assets/Saffron.jpg';
import vanilla from '../assets/Vanilla.jpg';
import tejpat from '../assets/Tejpat (Indian Bay Leaf).jpg';
import longPepper from '../assets/Long Pepper.jpg';
import starAnise from '../assets/Star Anise.jpeg';
import sweetFlag from '../assets/Sweet Flag.jpg';
import greaterGalangal from '../assets/Greater Galangal.jpg';
import horseradish from '../assets/Horseradish.jpg';
import caper from '../assets/Caper.jpeg';
import clove from '../assets/Clove.webp';
import asafoetida from '../assets/Asafoetida.webp';
import camboge from '../assets/Camboge (Kokum).jpg';
import hyssop from '../assets/Hyssop.jpg';
import juniper from '../assets/Juniper Berry.jpg';
import bayLeaf from '../assets/Bay Leaf.jpg';
import lovage from '../assets/Lovage.jpeg';
import marjoram from '../assets/Marjoram.jpeg';
import nutmeg from '../assets/Nutmeg.webp';
import mace from '../assets/Mace.webp';
import basil from '../assets/Basil.jpg';
import poppy from '../assets/Poppy Seed.jpg';
import allspice from '../assets/Allspice.webp';
import rosemary from '../assets/Rosemary.jpg';
import sage from '../assets/Sage.webp';
import savory from '../assets/Savory.webp';

const AllProducts = ({ category }) => {
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 6;

  const allProducts = [
    {
      id: 1,
      name: 'Cardamom (Small)',
      image: cardamomSmall,
      category: 'spices',
      description: 'Premium quality small cardamom'
    },
    {
      id: 2,
      name: 'Cardamom (Large)',
      image: cardamomLarge,
      category: 'spices',
      description: 'High-grade large cardamom'
    },
    {
      id: 3,
      name: 'Black Pepper',
      image: pepper,
      category: 'spices',
      description: 'Premium black pepper'
    },
    {
      id: 4,
      name: "Bird's Eye Chilli",
      image: birdsEyeChilli,
      category: 'spices',
      description: 'Hot and spicy bird\'s eye chilli'
    },
    {
      id: 5,
      name: 'Capsicum',
      image: capsicum,
      category: 'herbs',
      description: 'Fresh and crispy capsicum'
    },
    {
      id: 6,
      name: 'Red Chilli',
      image: chilli,
      category: 'spices',
      description: 'Premium quality red chilli'
    },
    {
      id: 7,
      name: 'Paprika',
      image: paprika,
      category: 'spices',
      description: 'Rich and colorful paprika'
    },
    {
      id: 8,
      name: 'Ginger',
      image: ginger,
      category: 'herbs',
      description: 'Fresh and aromatic ginger'
    },
    {
      id: 9,
      name: 'Turmeric',
      image: turmeric,
      category: 'spices',
      description: 'Pure and natural turmeric'
    },
    {
      id: 10,
      name: 'Coriander',
      image: coriander,
      category: 'herbs',
      description: 'Fresh coriander leaves'
    },
    {
      id: 11,
      name: 'Cumin Seeds',
      image: cumin,
      category: 'seeds',
      description: 'Premium cumin seeds'
    },
    {
      id: 12,
      name: 'Fennel Seeds',
      image: fennel,
      category: 'seeds',
      description: 'High-quality fennel seeds'
    }
    // Add more products as needed
  ];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(allProducts.filter(product => product.category === selectedCategory));
    }
    setCurrentPage(0); // Reset to first page when category changes
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentProducts = () => {
    const start = currentPage * productsPerPage;
    return filteredProducts.slice(start, start + productsPerPage);
  };

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'spices', name: 'Spices' },
    { id: 'herbs', name: 'Herbs' },
    { id: 'seeds', name: 'Seeds' }
  ];

  const handleQuit = () => {
    // You can customize this behavior based on your needs
    window.close();
    // Alternative: window.location.href = '/'; // Navigate to home
  };

  return (
    <div className="products-page">
      <button className="quit-button" onClick={handleQuit}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
        Quit
      </button>

      {/* Hero Section */}
      <section className="products-hero fade-in">
        <div className="products-hero-content">
          <h1>Our Complete Spice Collection</h1>
          <p>Discover the Finest Quality Indian Spices</p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-grid slide-in-left">
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

      {/* Products Grid Section */}
      <section className="products-grid-section">
        <div className="container">
          <div className="products-grid">
            {getCurrentProducts().map((product, index) => (
              <div key={product.id} className={`product-card scale-up delay-${index + 1} hover-lift`}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <button className="inquiry-btn hover-scale">Send Inquiry</button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Controls */}
          <div className="products-nav">
            <button 
              className="nav-button prev" 
              onClick={handlePrevPage}
              disabled={currentPage === 0}
            >
              &#8249;
            </button>
            <button 
              className="nav-button next" 
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
            >
              &#8250;
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta fade-in">
        <div className="container">
          <div className="cta-content">
            <h2>Can't Find What You're Looking For?</h2>
            <p>Contact us for custom orders and specific requirements</p>
            <button className="cta-button hover-scale">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProducts;