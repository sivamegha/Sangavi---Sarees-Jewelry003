import React from "react";
import { Link } from "react-router-dom";
import saree5 from '../pictures/saree5.webp';
import saree1 from '../pictures/saree1.webp';
import saree2 from '../pictures/saree2.jpg';
import readymade4 from '../pictures/readymade4.jpg';
import readymade1 from '../pictures/readymade1.jpg';
import readymade2 from '../pictures/readymade2.jpg';
import Embroidery from '../pictures/Embroidery.webp';
import Embroidery1 from '../pictures/Embroidery1.jpg';
import Embroidery2 from '../pictures/Embroidery2.png';
import jewelry from '../pictures/jewelry.webp';
import jewelry1 from '../pictures/jewelry1.webp';
import jewelry2 from '../pictures/jewelry2.webp';
import jewelry3 from '../pictures/jewelry3.webp';
import owner from '../pictures/owner.jpg';
import offer1 from '../pictures/offer1.jpg';
import offer2 from '../pictures/offer2.jpg';
import offer3 from '../pictures/offer3.jpg';
import "../style/Home.css";

const Home = () => {
  return (
    <main className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="brand-name">Sangavi</span>
          </h1>
          <p className="hero-subtitle">
            Premium Sarees • Ready-Made Wear • Embroidery • Gold Covering Jewelry
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn-primary">Explore Collections</Link>
            <Link to="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={saree1} alt="Sangavi Collections" className="hero-img" />
        </div>
      </section>

      
      
      {/* Collections Section */}
      <section className="collections-section">
        <div className="container">
          <h2 className="section-title">Our Collections</h2>
          <div className="collections-grid">
            
            {/* Sarees Collection */}
            <div className="collection-card">
              <div className="collection-images">
                <img src={saree5} alt="Silk Sarees" className="main-img" />
                <div className="image-grid">
                  <img src={saree2} alt="Cotton Sarees" className="grid-img" />
                  <img src={saree1} alt="Designer Sarees" className="grid-img" />
                </div>
              </div>
              <div className="collection-content">
                <h3 className="collection-title">Silk & Cotton Sarees</h3>
                <p className="collection-description">
                  Explore our extensive collection of traditional and modern sarees – 
                  from luxurious silk to comfortable cotton, featuring Kanchipuram, 
                  Banarasi, and contemporary designs.
                </p>
                <Link to="/services" className="collection-link">View Collection →</Link>
              </div>
            </div>

            {/* Ready-Made Collection */}
            <div className="collection-card">
              <div className="collection-images">
                <img src={readymade4} alt="Ready-Made Wear" className="main-img" />
                <div className="image-grid">
                  <img src={readymade1} alt="Women's Wear" className="grid-img" />
                  <img src={readymade2} alt="Kids Wear" className="grid-img" />
                </div>
              </div>
              <div className="collection-content">
                <h3 className="collection-title">Ready-Made Wear</h3>
                <p className="collection-description">
                  Stylish collections for the entire family – elegant kurtis, 
                  trendy frocks, comfortable salwars, and more. Perfect for 
                  every occasion and season.
                </p>
                <Link to="/services" className="collection-link">View Collection →</Link>
              </div>
            </div>

            {/* Embroidery Collection */}
            <div className="collection-card">
              <div className="collection-images">
                <img src={Embroidery} alt="Embroidery Work" className="main-img" />
                <div className="image-grid">
                  <img src={Embroidery1} alt="Bridal Embroidery" className="grid-img" />
                  <img src={Embroidery2} alt="Aari Work" className="grid-img" />
                </div>
              </div>
              <div className="collection-content">
                <h3 className="collection-title">Pencil & Aari Work</h3>
                <p className="collection-description">
                  Exquisite bridal embroidery, detailed pencil sketch work, 
                  traditional zardosi, and intricate aari work – crafted 
                  with precision and perfection.
                </p>
                <Link to="/services" className="collection-link">View Collection →</Link>
              </div>
            </div>

            {/* Jewelry Collection */}
            <div className="collection-card">
              <div className="collection-images">
                <img src={jewelry} alt="Gold Covering Jewelry" className="main-img" />
                <div className="image-grid">
                  <img src={jewelry1} alt="Bridal Sets" className="grid-img" />
                  <img src={jewelry2} alt="Bangles" className="grid-img" />
                </div>
              </div>
              <div className="collection-content">
                <h3 className="collection-title">Gold Covering Jewelry</h3>
                <p className="collection-description">
                  Stunning bridal sets, elegant bangles, traditional anklets, 
                  and imitation jewelry with lasting shine and quality finish.
                </p>
                <Link to="/services" className="collection-link">View Collection →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="offers-section">
        <div className="container">
          <h2 className="section-title">Special Offers</h2>
          <div className="offers-grid">
            <div className="offer-card">
              <img src={offer1} alt="Festival Offers" className="offer-img" />
              <div className="offer-content">
                <h3>Festival Special</h3>
                <p>Up to 40% off on selected sarees</p>
              </div>
            </div>
            <div className="offer-card">
              <img src={offer2} alt="Combo Offers" className="offer-img" />
              <div className="offer-content">
                <h3>Combo Packs</h3>
                <p>Buy 2 Get 1 Free on jewelry sets</p>
              </div>
            </div>
            <div className="offer-card">
              <img src={offer3} alt="New Arrivals" className="offer-img" />
              <div className="offer-content">
                <h3>New Arrivals</h3>
                <p>Latest designer collections</p>
              </div>
            </div>
          </div>
          <div className="offers-cta">
            <Link to="/Offers" className="btn-primary">View All Offers</Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">Visit Our Store</h2>
            <div className="contact-grid">
              <div className="contact-info">
                <h3>Store Details</h3>
                <div className="info-item">
                  <span className="icon">🏬</span>
                  <div>
                    <strong>Sangavi – Sarees & Collections</strong>
                    <p>No.123, Bazaar Street, Salem-1, Tamil Nadu</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="icon">📞</span>
                  <div>
                    <strong>Phone:</strong>
                    <p><a href="tel:+919876543210">+91 98765 43210</a></p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="icon">📧</span>
                  <div>
                    <strong>Email:</strong>
                    <p><a href="mailto:sangavistore@gmail.com">sangavistore@gmail.com</a></p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="icon">🕒</span>
                  <div>
                    <strong>Hours:</strong>
                    <p>Mon–Sun, 9:30 AM – 9:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-grid">
                  <a href="https://instagram.com/sangavistore" target="_blank" rel="noreferrer" className="social-link">
                    <span className="icon">📸</span>
                    <span>Instagram</span>
                  </a>
                  <a href="https://facebook.com/sangavistore" target="_blank" rel="noreferrer" className="social-link">
                    <span className="icon">📘</span>
                    <span>Facebook</span>
                  </a>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="social-link">
                    <span className="icon">💬</span>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-cta">
              <Link to="/contact" className="btn-primary">Contact Us</Link>
              <Link to="/SearchOrder" className="btn-secondary">Track Order</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
