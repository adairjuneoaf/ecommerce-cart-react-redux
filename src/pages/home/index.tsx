import React from 'react'

import ProductItem from '../../components/ProductItem'

import { Content } from '../../styles/pages/home'

const HomePage: React.FC = () => {
  return (
    <Content>
      <div className="bestSellersProducts">
        <h3>Best Sellers</h3>

        <section className="gridProducts">
          <ProductItem
            id={1}
            name="Headphone Sony 7.1 Ultra Bass"
            price="R$ 299.90"
            thumbnail="/assets/images/headphone.png"
          />
          <ProductItem
            id={1}
            name="Headphone Sony 7.1 Ultra Bass"
            price="R$ 299.90"
            thumbnail="/assets/images/headphone.png"
          />
          <ProductItem
            id={1}
            name="Headphone Sony 7.1 Ultra Bass"
            price="R$ 299.90"
            thumbnail="/assets/images/headphone.png"
          />
          <ProductItem
            id={1}
            name="Headphone Sony 7.1 Ultra Bass"
            price="R$ 299.90"
            thumbnail="/assets/images/headphone.png"
          />
          <ProductItem
            id={1}
            name="Headphone Sony 7.1 Ultra Bass"
            price="R$ 299.90"
            thumbnail="/assets/images/headphone.png"
          />
          <ProductItem
            id={1}
            name="Headphone Sony 7.1 Ultra Bass"
            price="R$ 299.90"
            thumbnail="/assets/images/headphone.png"
          />
          <ProductItem
            id={1}
            name="Headphone Sony 7.1 Ultra Bass"
            price="R$ 299.90"
            thumbnail="/assets/images/headphone.png"
          />
          <ProductItem
            id={1}
            name="Headphone Sony 7.1 Ultra Bass"
            price="R$ 299.90"
            thumbnail="/assets/images/headphone.png"
          />
        </section>
      </div>
    </Content>
  )
}

export default HomePage
