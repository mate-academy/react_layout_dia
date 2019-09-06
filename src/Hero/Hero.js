import React from 'react';
import Slider from '../Slider/Slider';

function Hero() {
  return (
    <section className="hero-wrap">
      <div className="hero">
        <h1 className="hero__title">Global digital agency</h1>
        <div className="hero__description">
By the same illusion which lifts the horizon of the sea to the level of the
          spectator on a hillside, the sable cloud beneath.
        </div>
        <button type="button" className="btn btn__default">Learn more</button>
      </div>
      <Slider />
      <div className="hero__network-links">
        <a href="/">Facebook</a>
        <a href="/">Twitter</a>
        <a href="/">Instagram</a>
      </div>
      <div className="intro section-header">
        <div className="section-header__name">Welcome</div>
        <div className="intro__welcome">
          By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable
          cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper
          half was strewn with silver.
        </div>
      </div>
    </section>
  );
}

export default Hero;
