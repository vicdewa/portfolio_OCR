import { Link } from 'react-router-dom';
import './Header.css'; 
import React, { useState } from 'react';  

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);  // Etat pour ouvrir/fermer le menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);  // Inverse l'état du menu
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

    return (
    <header>
      <nav>
        {/* Le bouton hamburger visible uniquement sur mobile */}
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Mes projets</Link></li>
          <li><Link to="/bio" onClick={closeMenu}>Qui suis-je?</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
