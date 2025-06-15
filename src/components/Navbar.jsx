import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logoinnochi.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (sectionId) => {
    setIsOpen(false); // Close mobile menu
    
    if (location.pathname !== '/') {
      // If not on home page, navigate to home and then scroll
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // If on home page, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const productCategories = [
    { title: 'Spices', path: '/products/spices' },
    { title: 'Herbs', path: '/products/herbs' },
    { title: 'Seeds', path: '/products/seeds' },
    { title: 'All Products', path: '/products' }
  ];

  const handleBookNow = () => {
    navigate('/contact');
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Global Trade Logo" className="navbar-logo-img" />
        </Link>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <div className={`hamburger ${isOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a 
              href="#home"
              className={`nav-links ${location.pathname === '/' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('home-section');
              }}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#about"
              className={`nav-links ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('about-section');
              }}
            >
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#certificates"
              className="nav-links"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('certificates-section');
              }}
            >
              Certificate
            </a>
          </li>
          <li 
            className="nav-item dropdown"
            onMouseEnter={() => setShowProductsDropdown(true)}
            onMouseLeave={() => setShowProductsDropdown(false)}
          >
            <Link 
              to="/products" 
              className={`nav-links ${location.pathname.includes('/products') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Products <span className="dropdown-arrow">▼</span>
            </Link>
            {showProductsDropdown && (
              <ul className="dropdown-menu">
                {productCategories.map((category, index) => (
                  <li key={index}>
                    <Link 
                      to={category.path}
                      className="dropdown-item"
                      onClick={() => {
                        setIsOpen(false);
                        setShowProductsDropdown(false);
                      }}
                    >
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="nav-item">
            <Link 
              to="/contact"
              className={`nav-links ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
          
        <div className="nav-buttons">
          <button className="book-now-btn" onClick={handleBookNow}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              fill="currentColor" 
              className="bi bi-calendar2-plus" 
              viewBox="0 0 16 16"
            >
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
              <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM8 8a.5.5 0 0 1 .5.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5A.5.5 0 0 1 8 8z"/>
            </svg>
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;