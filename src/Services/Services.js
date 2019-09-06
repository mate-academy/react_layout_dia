import React from 'react';

function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2 className="services__title" id="about">What we do</h2>
        <div className="services-wrap">
          <div className="service">
            <div className="service__image">
              <img src="/images/service1.png" alt="service" />
            </div>
            <div className="service__title">
              By the same illusion which lifts the horizon.
            </div>
            <div className="service__description">
By the same illusion which lifts the horizon of the sea to the level
                of the spectator on a hillside.
            </div>
          </div>
          <div className="service">
            <div className="service__image">
              <img src="/images/service2.png" alt="service" />
            </div>
            <div className="service__title">
              By the same illusion which lifts the horizon.
            </div>
            <div className="service__description">
By the same illusion which lifts the horizon of the sea to the level
                of the spectator on a hillside.
            </div>
          </div>
          <div className="service">
            <div className="service__image">
              <img src="/images/service3.png" alt="service" />
            </div>
            <div className="service__title">
              By the same illusion which lifts the horizon.
            </div>
            <div className="service__description">
By the same illusion which lifts the horizon of the sea to the level
                of the spectator on a hillside.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
