// src/pages/Offers.js
import React from "react";
import { Link } from "react-router-dom";
import offer from "../pictures/offer.jpg";
import offer1 from "../pictures/offer1.jpg";
import offer2 from "../pictures/offer2.jpg";
import offer3 from "../pictures/offer3.jpg";
import offer4 from "../pictures/offer4.jpg";
import offer5 from "../pictures/offer5.jpg";
import offer6 from "../pictures/offer6.jpg";
import offer7 from "../pictures/offer7.jpg";
import offer8 from "../pictures/offer8.jpg";
import offer9 from "../pictures/offer9.jpg";
import offer10 from "../pictures/offer10.jpg";
import "../style/Offers.css";

const Offers = () => {
  const offers = [
    {
      category: "🧵 Sarees",
      details: [
        "Buy 2 Get 1 Free – on cotton and daily wear sarees.",
        "Flat 20% Off – on Kanchipuram silk sarees (limited festive offer).",
        "Combo Offer – Silk saree + matching blouse stitching @ ₹999 extra.",
      ],
    },
    {
      category: "👗 Ready-Made Wear",
      details: [
        "Women’s Kurtis starting from ₹399.",
        "Men’s Kurta Sets – ₹200 off on orders above ₹1999.",
        "Kidswear Combo Packs – 3 sets @ ₹999.",
      ],
    },
    {
      category: "✨ Embroidery Services",
      details: [
        "10% Off on Pencil & Aari embroidery above ₹2000.",
        "Bridal Package – Free dupatta border with full blouse & lehenga embroidery.",
      ],
    },
    {
      category: "💎 Gold Covering Jewelry",
      details: [
        "Bridal Combo Sets – Starting @ ₹1499 only.",
        "Free Jhumka on purchases above ₹999.",
        "Buy 2, Get 1 Ring Free – on bangles, rings, and anklets.",
      ],
    },
    {
      category: "💥 Storewide Offers",
      details: [
        "Extra 5% off on orders above ₹2999.",
        "Loyalty Card: 5 stamps = 1 item free.",
        "Free Home Delivery within 10 km on orders ₹1000+.",
      ],
    },
    {
      category: "Festival & Combo Offers",
      details: [
        "Don’t miss out on our festive discounts and exclusive combo packs. Shop now!.",
       
      ],
    },
    
  ];

  return (
    
    <section className="offers-section">
        <section className="offer-section">
      <h2 className="offer-heading">🎁 Special Offers – Free Gifts!</h2>
      <p className="offer-subtext">
        Grab your favorite sarees and dresses and get surprise gifts with every purchase!
      </p>

      <div className="offer-slider">
        <div className="slide-track">
          <div className="slide"><img src={offer} alt="Gift 1" /></div>
          <div className="slide"><img src={offer1} alt="Gift 2" /></div>
          <div className="slide"><img src={offer2} alt="Gift 3" /></div>
          {/* Duplicate for infinite loop effect */}
          <div className="slide"><img src={offer3} alt="Gift 1" /></div>
          <div className="slide"><img src={offer4} alt="Gift 2" /></div>
          <div className="slide"><img src={offer5} alt="Gift 3" /></div>
          <div className="slide"><img src={offer6} alt="Gift 3" /></div>
          <div className="slide"><img src={offer7} alt="Gift 3" /></div>
          <div className="slide"><img src={offer8} alt="Gift 3" /></div>
          <div className="slide"><img src={offer9} alt="Gift 3" /></div>
          <div className="slide"><img src={offer10} alt="Gift 3" /></div>
        </div>
      </div>
      

      
    </section>
      <div className="offers-container">
        <h1 className="offers-title">🎉 Offers & Deals at Sangavi</h1>
        <div className="offers-grid">
          {offers.map((offer, index) => (
            <div key={index} className="offer-box">
              <h3 className="offer-category">{offer.category}</h3>
              <ul className="offer-list">
                {offer.details.map((item, idx) => (
                  <li key={idx} className="offer-item">🔖 {item}</li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>

        
      </div>
      <footer className="footer">
           <Link to="/contact" className="mt-10 inline-block bg-rose-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-rose-700 transition">
          Contact Us
        </Link>
          <div className="contact-details mt-16 text-sm text-gray-700">
            <p><strong>🏬 Store:</strong> Sangavi – Sarees & Collections</p>
            <p><strong>📍 Address:</strong> No.123, Bazaar Street, Salem-1, Tamil Nadu</p>
            <p><strong>📞 Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a></p>
            <p><strong>📧 Email:</strong> <a href="mailto:sangavistore@gmail.com">sangavistore@gmail.com</a></p>
            <p><strong>🕒 Hours:</strong> Mon–Sun, 9:30 AM – 9:00 PM</p>
            <div className="social-links mt-3">
              <a href="https://instagram.com/sangavistore" target="_blank" rel="noreferrer">📸 Instagram</a> |{" "}
              <a href="https://facebook.com/sangavistore" target="_blank" rel="noreferrer">📘 Facebook</a> |{" "}
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">💬 WhatsApp</a>
            </div>
          </div>
        </footer>
        
    </section>
    
    
  );
};

export default Offers;
