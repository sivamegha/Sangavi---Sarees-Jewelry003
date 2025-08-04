// src/pages/SearchOrder.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/searchorder.css";

// Image imports
import saree from "../pictures/saree.jpg";
import saree1 from "../pictures/saree1.webp";
import saree2 from "../pictures/saree2.jpg";
import saree3 from "../pictures/saree3.webp";
import saree4 from "../pictures/saree4.webp";
import readymade from "../pictures/readymade.webp";
import readymade1 from "../pictures/readymade1.jpg";
import readymade2 from "../pictures/readymade2.jpg";
import readymade3 from "../pictures/readymade3.webp";
import readymade4 from "../pictures/readymade4.jpg";
import readymade5 from "../pictures/readymade5.webp";
import embroidery from "../pictures/Embroidery.webp";
import embroidery1 from "../pictures/Embroidery1.jpg";
import embroidery2 from "../pictures/Embroidery2.png";
import embroidery3 from "../pictures/Embroidery3.jpg";
import embroidery4 from "../pictures/Embroidery4.jpg";
import embroidery5 from "../pictures/Embroidery5.jpg";
import jewelry from "../pictures/jewelry.webp";
import jewelry1 from "../pictures/jewelry1.webp";
import jewelry2 from "../pictures/jewelry2.webp";
import jewelry3 from "../pictures/jewelry3.webp";
import jewelry4 from "../pictures/jewelry4.jpg";
import jewelry5 from "../pictures/jewelry5.jpg";
import QRcode from "../pictures/QRcode.jpg";

const products = [
  { id: 1, name: "Red Silk Saree", category: "Saree", price: 1599, image: saree1, offer: true },
  { id: 2, name: "Men Kurta Set", category: "Ready-Made", price: 1099, image: readymade2, offer: false },
  { id: 3, name: "Embroidery Bridal Blouse", category: "Embroidery", price: 899, image: embroidery3, offer: true },
  { id: 4, name: "Embroidery Bridal Blouse", category: "Embroidery1", price: 900, image: embroidery4, offer: true },
  { id: 5, name: "Saree Collection", category: "Saree", price: 1900, image: saree, offer: true },
  { id: 6, name: "Saree Classic", category: "Saree", price: 899, image: saree1, offer: true },
  { id: 7, name: "Festive Saree", category: "Saree", price: 999, image: saree2, offer: true },
  { id: 8, name: "Wedding Saree", category: "Saree", price: 1899, image: saree3, offer: true },
  { id: 9, name: "Designer Saree", category: "Saree", price: 788, image: saree4, offer: true },
  { id: 10, name: "Readymade Kurti", category: "Readymade", price: 799, image: readymade, offer: true },
  { id: 11, name: "Kurti Design 1", category: "Readymade", price: 699, image: readymade1, offer: true },
  { id: 12, name: "Kurti Design 2", category: "Readymade", price: 500, image: readymade2, offer: true },
  { id: 13, name: "Kurti Design 3", category: "Readymade", price: 999, image: readymade3, offer: true },
  { id: 14, name: "Kurti Design 4", category: "Readymade", price: 900, image: readymade4, offer: true },
  { id: 15, name: "Kurti Design 5", category: "Readymade", price: 1299, image: readymade5, offer: true },
  { id: 16, name: "Embroidery Work", category: "Embroidery", price: 1999, image: embroidery, offer: true },
  { id: 17, name: "Bridal Embroidery", category: "Embroidery", price: 1900, image: embroidery1, offer: true },
  { id: 18, name: "Custom Embroidery", category: "Embroidery", price: 1500, image: embroidery2, offer: true },
  { id: 19, name: "Aari Work", category: "Embroidery", price: 1600, image: embroidery3, offer: true },
  { id: 20, name: "Pencil Work", category: "Embroidery", price: 899, image: embroidery4, offer: true },
  { id: 21, name: "Zardosi Embroidery", category: "Embroidery", price: 999, image: embroidery5, offer: true },
  { id: 22, name: "Bridal Jewelry", category: "Jewelry", price: 799, image: jewelry, offer: true },
  { id: 23, name: "Gold Necklace", category: "Jewelry", price: 900, image: jewelry1, offer: true },
  { id: 24, name: "Temple Jewelry", category: "Jewelry", price: 899, image: jewelry2, offer: true },
  { id: 25, name: "Traditional Earrings", category: "Jewelry", price: 599, image: jewelry3, offer: true },
  { id: 26, name: "Fancy Jewelry", category: "Jewelry", price: 1199, image: jewelry4, offer: true },
  { id: 27, name: "Anklet Combo", category: "Jewelry", price: 1399, image: jewelry5, offer: true },
];

const SearchOrder = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderDetails, setOrderDetails] = useState({ name: "", phone: "", address: "", paymentMethod: "COD" });
  const [paymentDone, setPaymentDone] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [shopMore, setShopMore] = useState(false);

  const filtered = products.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleOrderSubmit = async () => {
    if (selectedProduct) {
      const dataToSend = {
        name: orderDetails.name,
        dress: selectedProduct.name,
        amount: selectedProduct.price,
        address: orderDetails.address,
        phone: orderDetails.phone,
        payment_type: orderDetails.paymentMethod
      };
      try {
        await axios.post("http://localhost:5000/api/order", dataToSend);
        setOrderPlaced(true);
        if (orderDetails.paymentMethod === "UPI") {
          setTimeout(() => {
            setPaymentDone(true);
            if (selectedProduct.offer) setPopupVisible(true);
          }, 2000);
        } else {
          setPaymentDone(true);
          if (selectedProduct.offer) setPopupVisible(true);
        }
      } catch (error) {
        alert("Order failed to submit to server.");
      }
    }
  };

  const handleShopMore = () => {
    setShopMore(true);
    setSelectedProduct(null);
    setOrderDetails({ name: "", phone: "", address: "", paymentMethod: "COD" });
    setPaymentDone(false);
    setPopupVisible(false);
    setOrderPlaced(false);
  };

  return (
    <div className="search-order-container">
      {!selectedProduct ? (
        <>
          <input
            type="text"
            placeholder="Search for dress (e.g. saree, kurta, blouse)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
          <div className="product-grid">
            {filtered.map((p) => (
              <div className="product-card" key={p.id}>
                <img src={p.image} alt={p.name} />
                <h3>{p.name}</h3>
                <p>₹{p.price}</p>
                <button onClick={() => setSelectedProduct(p)}>Order Now</button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="order-page">
          <h2>Order: {selectedProduct.name}</h2>
          <img src={selectedProduct.image} alt={selectedProduct.name} />
          <input type="text" placeholder="Your Name" value={orderDetails.name} onChange={(e) => setOrderDetails({ ...orderDetails, name: e.target.value })} />
          <input type="text" placeholder="Phone Number" value={orderDetails.phone} onChange={(e) => setOrderDetails({ ...orderDetails, phone: e.target.value })} />
          <textarea placeholder="Address" value={orderDetails.address} onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}></textarea>
          <select value={orderDetails.paymentMethod} onChange={(e) => setOrderDetails({ ...orderDetails, paymentMethod: e.target.value })}>
            <option value="COD">Cash on Delivery</option>
            <option value="UPI">UPI Payment</option>
          </select>
          <button onClick={handleOrderSubmit}>Place Order</button>

          {orderDetails.paymentMethod === "UPI" && !paymentDone && (
            <div className="upi-box">
              <h4>Scan & Pay</h4>
              <img src={QRcode} alt="QR Code" />
              <p>UPI ID: sangavi@upi</p>
            </div>
          )}

          {popupVisible && (
            <div className="popup-celebration">
              🎉 Offer Applied! Thank you for your purchase!
              <div className="fireworks">🎆🎇💥</div>
            </div>
          )}

          {orderPlaced && !shopMore && (
            <div className="order-success">
              <h2>🎉 Order Placed Successfully!</h2>
              <p>Do you want to continue shopping?</p>
              <button onClick={handleShopMore}>Yes, Show More</button>
              <button onClick={() => alert("Thank you for shopping with us! 🎊")}>No, Exit</button>
            </div>
          )}
        </div>
      )}

      {shopMore && (
        <div className="text-center">
          <h3 className="text-xl text-pink-600 font-semibold animate-bounce">🎇 Showing More Collections...
          </h3>
        </div>
      )}

      {/* Professional Footer */}
      <footer className="professional-footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="brand-section">
                  
                <span className="brand-name">
                  <span className="brand-primary">Sangavi</span>
                  <span className="brand-secondary"> Collections</span>
                </span>
              </div>
              <p className="brand-description">
                Transforming traditional fashion into modern elegance. Your premier destination for sarees, 
                ready-made wear, embroidery work, and stunning jewelry in Salem.
              </p>
              <div className="social-icons">
                <a href="https://instagram.com/sangavistore" target="_blank" rel="noreferrer" className="social-icon">
                  <span>📸</span>
                </a>
                <a href="https://facebook.com/sangavistore" target="_blank" rel="noreferrer" className="social-icon">
                  <span>📘</span>
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="social-icon">
                  <span>💬</span>
                </a>
              </div>
            </div>

            <div className="footer-services">
              <h3 className="footer-title">Our Collections</h3>
              <ul className="footer-links">
                <li><span>Silk & Cotton Sarees</span></li>
                <li><span>Ready-Made Wear</span></li>
                <li><span>Pencil & Aari Work</span></li>
                <li><span>Gold Covering Jewelry</span></li>
                <li><span>Bridal Collections</span></li>
                <li><span>Designer Sarees</span></li>
                <li><span>Traditional Wear</span></li>
              </ul>
            </div>

            <div className="footer-services">
              <h3 className="footer-title">Special Services</h3>
              <ul className="footer-links">
                <li><span>Custom Embroidery Work</span></li>
                <li><span>Bridal Dress Design</span></li>
                <li><span>Alteration Services</span></li>
                <li><span>Festival Collections</span></li>
                <li><span>Wedding Packages</span></li>
                <li><span>Home Delivery</span></li>
                <li><span>Gift Wrapping</span></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h3 className="footer-title">Contact Info</h3>
              <div className="contact-items">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <a href="mailto:sangavistore@gmail.com" className="contact-link">
                    sangavistore@gmail.com
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <a href="tel:+919876543210" className="contact-link">
                    +91 98765 43210
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <a href="https://maps.google.com/?q=No.123, Bazaar Street, Salem-1, Tamil Nadu" target="_blank" rel="noreferrer" className="contact-link">
                    No.123, Bazaar Street, Salem-1, Tamil Nadu
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <p className="copyright-text">
                © 2025 Sangavi Sarees & Collections. All rights reserved.
              </p>
            </div>
            <div className="footer-policies">
              <span className="policy-link">Privacy Policy</span>
              <span className="policy-link">Terms of Service</span>
              <span className="policy-link">Return Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SearchOrder;
