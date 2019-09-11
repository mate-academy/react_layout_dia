import React from 'react';

function Footer() {
  return (
    <footer className="container">
      <div className="footer-wrap">
        <div className="copyright">Design by @mariuszdaniel</div>
        <ul className="footer-nav">
          <li className="footer-nav__item">
            <a className="footer-nav__link" href="#home">Home</a>
          </li>
          <li className="footer-nav__item">
            <a className="footer-nav__link" href="#about">About us</a>
          </li>
          <li className="footer-nav__item">
            <a className="footer-nav__link" href="#services">Services</a>
          </li>
          <li className="footer-nav__item">
            <a className="footer-nav__link" href="#process">Work</a>
          </li>
          <li className="footer-nav__item">
            <a className="footer-nav__link" href="#contacts">Contact Us</a>
          </li>
          <li className="footer-nav__item">
            <a className="footer-nav__link" href="#apply">Hire us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
