import React from 'react';

function Contacts() {
  return (
    <section id="contacts">
      <div className="container">
        <div className="contacts-wrap">
          <div className="feedback">
            <div className="section-header">
              <div className="section-header__name">Send us a message</div>
            </div>
            <form className="feedback-form">
              <div className="form-group">
                <label htmlFor="email">Your email</label>
                <input id="email" name="email" className="form-control" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" className="form-control" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your message</label>
                <input id="message" name="message" className="form-control" type="text" />
              </div>
              <button className="btn btn__primary" type="submit">Send</button>
            </form>
          </div>
          <div className="contacts">
            <div className="section-header">
              <div className="section-header__name">Contact us</div>
              <div className="section-header__title">
                By the same illusion which lifts the horizon.
              </div>
            </div>
            <div className="contact">
              <div className="contact__title">Call us</div>
              <a className="contact__info" href="tel:654321987">654 321 987</a>
            </div>
            <div className="contact">
              <div className="contact__title">Visit us</div>
              <div className="contact__info">2905 West Drive, Buffalo Grove</div>
            </div>
            <div className="contact-network">
              <a href="#" className="contact-network__link">
                <img className="contact-network__icon" src="./images/twitter.svg" alt="" />
              </a>
              <a href="#" className="contact-network__link">
                <img className="contact-network__icon" src="./images/instagram.svg" alt="" />
              </a>
              <a href="#" className="contact-network__link">
                <img className="contact-info__icon" src="./images/facebook.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
