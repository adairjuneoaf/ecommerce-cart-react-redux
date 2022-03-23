import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { FiMenu, FiShoppingCart } from 'react-icons/fi'

import Logo from './Logo'

import { Content } from '../styles/components/Header'
import PreviewCart from './PreviewCart'

const Header: React.FC = () => {
  const [isPreviewCart, setIsPreviewCart] = useState<boolean>(false)

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
        <div
          className="cart"
          onMouseEnter={() => {
            console.log('a')
          }}
        >
          <Link
            to={'/cart'}
            className="linkCart"
            onMouseEnter={() => {
              setIsPreviewCart(true)
            }}
            onMouseLeave={() => {
              setIsPreviewCart(false)
            }}
          >
            <FiShoppingCart className="icon" />
            <div className="countCart">5</div>
          </Link>
          <PreviewCart
            classActiveInactive={
              isPreviewCart ? 'activePreviewCart' : 'inactivePreviewCart'
            }
          />
        </div>
        <div className="divider" />
        <button type="button">
          <FiMenu className="icon" />
        </button>
      </section>
    </Content>
  )
}

export default Header
