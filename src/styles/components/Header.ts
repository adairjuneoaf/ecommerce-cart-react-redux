import styled from 'styled-components'

export const Content = styled.header`
  width: calc(100vw - 4rem);
  height: 5rem;

  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  .logoBusiness {
    min-width: 256px;
    flex: 1;
  }

  .menuNavigation {
    flex: 10;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;

    a {
      text-decoration: none;
      color: var(--gray-300);
      font-weight: 400;

      transition: color 0.3s;

      &:hover {
        color: var(--white-default);
      }
    }
  }

  .dataSession {
    min-width: 256px;

    flex: 1;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;

    .cart {
      position: relative;

      .linkCart {
        position: relative;

        .countCart {
          position: absolute;

          top: 0;
          left: 14px;

          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;

          font-size: 0.75rem;
          font-weight: 700;

          color: var(--white-default);

          width: 16px;
          height: 16px;

          border-radius: 7px;

          background: var(--purple-300);
        }

        &:hover {
          a {
            color: red;
          }
        }
      }
    }

    .divider {
      width: 2px;
      height: 48px;

      border-radius: 2px;

      background: var(--black-300);
    }

    button {
      color: 0;
      background: transparent;

      font-size: 0;
      border: 0;

      width: fit-content;
      height: fit-content;
    }
  }
`
