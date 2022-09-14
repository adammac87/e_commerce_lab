import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/ShoppingBasket'>Basket</Link>
        </li>
        <li>
          <Link to='/CakeList'>Cakes</Link>
        </li>
      </ul>
      <hr></hr>
    </>
  )

}

export default NavBar
