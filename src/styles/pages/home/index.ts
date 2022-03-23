import styled from 'styled-components'

export const Content = styled.section`
  .bestSellersProducts {
    width: 100%;
    height: auto;

    > h3 {
      margin-bottom: 18px;
    }

    .gridProducts {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      gap: 2rem 1rem;
    }
  }
`
