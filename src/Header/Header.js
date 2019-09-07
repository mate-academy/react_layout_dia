import React, { Component } from 'react';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const navClassList = isOpen ? 'header-nav open' : 'header-nav';
    const overlayClassList = isOpen ? 'overlay show' : 'overlay';
    return (
      <header className="header" id="home">
        <a href="/" className="logo">Dia</a>
        <nav className={navClassList}>
          <span
            className="nav__close drawer-toggle"
            onClick={this.handleClick}
            onKeyPress={this.handleClick}
            role="button"
            tabIndex="0"
          />
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
        <div
          className="bars drawer-toggle"
          onClick={this.handleClick}
          onKeyPress={this.handleClick}
          role="button"
          tabIndex="0"
        >
          <div />
          <div />
          <div />
        </div>
        <div className={overlayClassList} />
      </header>
    );
  }
}
