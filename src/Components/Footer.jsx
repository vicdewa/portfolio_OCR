import React from 'react';
import './Footer.css';  

const Footer = () => {
  return (
    <footer>
      <h1 className="name">Victoire Dewaegeneire</h1>
      <section className="contact-info">
        <div className="footer-column">
        <p className="address">
          Amager Strandvej 100 8TH<br />
          2300 København<br />
          Danemark<br />
        </p>
        </div>
        <div className="footer-column">
          <p className="contact">
            +45 7149 2017<br />
            victoire.dew@gmail.com
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
