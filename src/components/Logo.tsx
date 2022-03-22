import React from 'react'

import { Link } from 'react-router-dom'

import { Content } from '../styles/components/Logo'

const Logo: React.FC = () => {
  return (
    <Link to={'/'}>
      <Content>
        <h1 className="left">shop</h1>
        <div />
        <h1 className="right">redux</h1>
      </Content>
    </Link>
  )
}

export default Logo
