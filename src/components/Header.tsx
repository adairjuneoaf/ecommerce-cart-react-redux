import React from 'react'

import { Link } from 'react-router-dom'
import { FiMenu, FiShoppingCart } from 'react-icons/fi'

import Logo from './Logo'

import { Content } from '../styles/components/Header'

const Header: React.FC = () => {
  return (
    <Content>
      <section className="logoBusiness">
        <Logo />
      </section>
      <nav className="menuNavigation">
        <Link to={'/'}>Home</Link>
        <Link to={'products'}>Products</Link>
        <Link to={'about'}>About us</Link>
      </nav>
      <section className="dataSession">
        <Link to={'/cart'}>
          <FiShoppingCart className="icon" />
        </Link>
        <div className="divider" />
        <button type="button">
          <FiMenu className="icon" />
        </button>
      </section>
    </Content>
  )
}

export default Header
