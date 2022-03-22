import React from 'react'

import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/home'
import CartPage from './pages/cart'

import { MainContent } from './styles/App'
import Header from './components/Header'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
        </Routes>
      </MainContent>
    </>
  )
}

export default App
