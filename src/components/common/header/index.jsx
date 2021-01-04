import React from 'react'

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <a href="/">
          <span className="logo-image-container">LOGO</span>
          <span className="logo-text-container">My Site Title</span>
        </a>
      </div>
      <div className="menu-options-container">
        <a href="/shop" className="menu-option">
          SHOP
        </a>
        <a href="/contact" className="menu-option">
          CONTACT
        </a>
      </div>
    </div>
  )
}

export default Header
