import React from 'react'

import { FiHeart } from 'react-icons/fi'
import { MdOutlineAddShoppingCart } from 'react-icons/md'

import { Content } from '../styles/components/ProductItem'

interface ProductItemProps {
  id: number | string
  name: string
  price: string
  thumbnail: string
}

const ProductItem: React.FC<ProductItemProps> = ({
  name,
  price,
  thumbnail
}) => {
  return (
    <Content>
      <img src={thumbnail} alt="img_product" />
      <section className="infoProduct">
        <h4 className="titleProduct">{name}</h4>
        <strong className="priceProduct">{price}</strong>
      </section>
      <section className="footerProduct">
        <button type="button" title="Adicionar aos favoritos">
          <FiHeart className="icon" />
        </button>
        <button type="button" title="Adicionar ao carrinho">
          <MdOutlineAddShoppingCart className="icon" />
        </button>
      </section>
    </Content>
  )
}

export default ProductItem
