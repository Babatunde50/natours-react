import React from 'react'

import { ReactComponent as Logo } from '../assets/img/icons.svg'

export default function SearchForm() {
    return (
        <form className="nav__search">
          <button className="nav__search-btn">
            <Logo />
          </button>
          <input
            type="text"
            placeholder="Search tours"
            className="nav__search-input"
          />
        </form>
    )
}
