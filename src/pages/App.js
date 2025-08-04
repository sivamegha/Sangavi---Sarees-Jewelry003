import { Link, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import SearchOrder from './SearchOrder';
import Offers from './Offers';
import Login from './Login';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="App">
      
      <nav className='navbar'>
        <div className='navbar-container'>
          {/* Mobile Hamburger Menu */}
          <div className='hamburger-menu' onClick={toggleMenu}>
            <div className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></div>
            <div className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></div>
            <div className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></div>
          </div>

          {/* Desktop Navigation */}
          <ul className='nav-links desktop-nav'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Collections</Link></li>
            <li><Link to="/Offers">Offers</Link></li>
            <li><Link to="/SearchOrder">Order</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li className='log'><Link to="/Login">Login/Signup</Link></li>
          </ul>

          {/* Mobile Navigation */}
          <ul className={`nav-links mobile-nav ${isMenuOpen ? 'open' : ''}`}>
            <li><Link to="/" onClick={closeMenu}>🏠 Home</Link></li>
            <li><Link to="/services" onClick={closeMenu}>👗 Collections</Link></li>
            <li><Link to="/Offers" onClick={closeMenu}>🎁 Offers</Link></li>
            <li><Link to="/SearchOrder" onClick={closeMenu}>📦 Order</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>📞 Contact</Link></li>
            <li className='log'><Link to="/Login" onClick={closeMenu}>🔐 Login/Signup</Link></li>
          </ul>
        </div>
      </nav>

     
    
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />
     
         <Route path="/SearchOrder" element={<SearchOrder />} />
        <Route path="/Login" element={<Login />} />
      </Routes>


      

    </div>
  );
}

export default App;
