import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/ShoppingBasket'>Basket</Link>
      </li>
      <li>
        <Link to='/ShowCakes'>Cakes</Link>
      </li>
    </ul>
  )
}

export default NavBar
