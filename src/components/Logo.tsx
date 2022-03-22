import React from 'react'

import { Link } from 'react-router-dom'

import { Content } from '../styles/components/Logo'

const Logo: React.FC = () => {
  return (
    <Link to={'/'}>
      <Content>
        <h1 className="text">reduxshop</h1>
      </Content>
    </Link>
  )
}

export default Logo
