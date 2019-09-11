import React from 'react';
import './App.scss';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Process from './Process/Process';
import Features from './Features/Features';
import Reviews from './Reviews/Reviews';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';
import Apply from './Apply/Apply';

function App() {
  return (
    <div className="page">
      <div className="skew-background" />
      <div className="container">
        <Header />
        <Hero />
      </div>
      <Services />
      <Process />
      <Features />
      <Reviews />
      <Apply />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
