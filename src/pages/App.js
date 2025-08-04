import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import SearchOrder from './SearchOrder';
import Offers from './Offers';
import Login from './Login';

function App() {
 
  return (


    
    <div className="App">
      
      <nav className='navbar'>
        <div className='navbar-container'>
        <ul className='nav-links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Collections</Link></li>
          <li><Link to="/Offers">Offers</Link></li>
     
              <li><Link to="/SearchOrder">Order</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className='log'><Link to="/Login">Login/Signup</Link></li>
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
