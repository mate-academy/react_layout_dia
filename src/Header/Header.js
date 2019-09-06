import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.nav.classList.add('open');
    this.overlay.classList.add('show');
  }

  close() {
    this.nav.classList.remove('open');
    this.overlay.classList.remove('show');
  }

  render() {
    return (
      <header className="header" id="home">
        <a href="/" className="logo">Dia</a>
        <nav className="header-nav" ref={c => (this.nav = c)}>
          <span className="nav__close drawer-toggle" onClick={this.close} />
          <ul className="nav">
            <li className="nav__item">
              <a className="nav__link" href="#home">Home</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#about">About us</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#services">Services</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#process">Work</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#contacts">Contact Us</a>
            </li>
            <li className="nav__item">
              <a className="nav__link active" href="#apply">Hire us</a>
            </li>
          </ul>
        </nav>
        <div className="bars drawer-toggle" onClick={this.open}>
          <div />
          <div />
          <div />
        </div>
        <div className="overlay" ref={c => (this.overlay = c)} />
      </header>
    );
  }
}
