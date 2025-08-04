// src/components/Navbar.jsx
import { Home, Hammer, Phone, Info } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-md flex justify-between items-center">
      <div className="text-xl font-bold">FKode</div>
      <ul className="flex space-x-6">
        <li className="hover:text-yellow-300 flex items-center gap-1">
          <Home size={18} />
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-yellow-300 flex items-center gap-1">
          <Hammer size={18} />
          <Link to="/services">Services</Link>
        </li>
        <li className="hover:text-yellow-300 flex items-center gap-1">
          <Info size={18} />
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-yellow-300 flex items-center gap-1">
          <Phone size={18} />
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
