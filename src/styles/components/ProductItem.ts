import styled from 'styled-components'

export const Content = styled.article`
  max-width: 384px;
  min-height: 384px;

  background: var(--black-800);
  border-radius: 16px;

  color: var(--white-default);

  padding: 1.5rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  img {
    width: 50%;
    height: auto;

    margin: 0 auto;
  }

  .infoProduct {
    flex: 2;

    margin-top: 0.75rem;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;

    gap: 8px;

    .titleProduct {
      font-size: 1.125rem;
    }
    .priceProduct {
      font-size: 2rem;
    }
  }

  .footerProduct {
    flex: 1;

    margin-top: 0.75rem;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    gap: 1.5rem;

    button {
      font-size: 0;
      background: transparent;
      border: 0;
    }
  }
`
