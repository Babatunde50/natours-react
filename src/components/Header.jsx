import React from 'react';
import SearchForm from './SearchForm'

import logo from '../assets/img/logo-white.png'


export default function Header() {
  return (
    <header className="header">
      <nav className="nav nav--tours">
        <a href="ljsls" className="nav__el">All tours</a>
        <SearchForm />
      </nav>
      <div className="header__logo">
        <img src={logo} alt="Natours logo" />
      </div>
      <nav className="nav nav--user">
        <a href="kllkf" className="nav__el">My bookings</a>
        {/* <a href="jkjksd" className="nav__el">
          <img src="img/user.jpg" alt="user" className="nav__user-img" />
          <span>Jonas</span>
        </a> */}
        <button className="nav__el">Log in</button>
        <button className="nav__el nav__el--cta">Sign up</button>
      </nav>
    </header>

  );
}
