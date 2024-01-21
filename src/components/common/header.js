
import React from 'react'
import Logo from '../../images/Logo.png'
import heart from '../../images/heart.png'
import Cart from '../../images/add shopping-bag.png'
import down from '../../images/chevron-down.png'
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="head_box_wraper" >
          <img src={Logo} alt=''/>
          <input type='search' placeholder=' Search something' className="head_search" />
          <nav className="left_nav">
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/Shop">SHOP<img src={down} alt=''/></a></li>
              <li><a href="/blog">BLOG</a></li>
              <li><a href="/about">ABOUT US</a></li>
            </ul>
          </nav>
          <nav className="right_nev">
            <ul>
              <li><a href="/wishlist"><img src={heart} alt=''/>LOVE</a></li>
              <li><a href="/cart"><img src={Cart} alt=''/>CART</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header