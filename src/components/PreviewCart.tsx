import React, { HTMLAttributes, useState } from 'react'
import { Link } from 'react-router-dom'

import { Container, Content } from '../styles/components/PreviewCart'

interface PreviewCartProps extends HTMLAttributes<HTMLDivElement> {
  classActiveInactive: string
}

const PreviewCart: React.FC<PreviewCartProps> = ({ classActiveInactive }) => {
  const [isVisibilityPreview, setIsVisibilityPreview] = useState<boolean>(true)

  return (
    <Container
      className={isVisibilityPreview && classActiveInactive}
      onMouseEnter={() => {
        setIsVisibilityPreview(false)
      }}
      onMouseLeave={() => {
        setIsVisibilityPreview(true)
      }}
    >
      <Content>
        <div className="titleCartPreview">
          <h3>Meu carrinho</h3>
          <Link to={'/cart'} className="finishedSale">
            Finalizar compra
          </Link>
        </div>
        <div className="itemsInCart">
          <article>
            <img
              src="/assets/images/headphone.png"
              alt="image_product_in_preview_cart"
            />
            <section>
              <h3>Product Name</h3>
              <p>Nº Quantidade</p>
            </section>
            <h3>R$ 500,00</h3>
          </article>
          <article>
            <img
              src="/assets/images/headphone.png"
              alt="image_product_in_preview_cart"
            />
            <section>
              <h3>Product Name</h3>
              <p>Nº Quantidade</p>
            </section>
            <h3>R$ 500,00</h3>
          </article>
          <article>
            <img
              src="/assets/images/headphone.png"
              alt="image_product_in_preview_cart"
            />
            <section>
              <h3>Product Name</h3>
              <p>Nº Quantidade</p>
            </section>
            <h3>R$ 500,00</h3>
          </article>
          <article>
            <img
              src="/assets/images/headphone.png"
              alt="image_product_in_preview_cart"
            />
            <section>
              <h3>Product Name</h3>
              <p>Nº Quantidade</p>
            </section>
            <h3>R$ 500,00</h3>
          </article>
          <article>
            <img
              src="/assets/images/headphone.png"
              alt="image_product_in_preview_cart"
            />
            <section>
              <h3>Product Name</h3>
              <p>Nº Quantidade</p>
            </section>
            <h3>R$ 500,00</h3>
          </article>
          <article>
            <img
              src="/assets/images/headphone.png"
              alt="image_product_in_preview_cart"
            />
            <section>
              <h3>Product Name</h3>
              <p>Nº Quantidade</p>
            </section>
            <h3>R$ 500,00</h3>
          </article>
          <article>
            <img
              src="/assets/images/headphone.png"
              alt="image_product_in_preview_cart"
            />
            <section>
              <h3>Product Name</h3>
              <p>Nº Quantidade</p>
            </section>
            <h3>R$ 500,00</h3>
          </article>
          <article>
            <img
              src="/assets/images/headphone.png"
              alt="image_product_in_preview_cart"
            />
            <section>
              <h3>Product Name</h3>
              <p>Nº Quantidade</p>
            </section>
            <h3>R$ 500,00</h3>
          </article>
        </div>
      </Content>
    </Container>
  )
}

export default PreviewCart
