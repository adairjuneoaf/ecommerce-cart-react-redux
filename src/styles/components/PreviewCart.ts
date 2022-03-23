import styled from 'styled-components'

export const Container = styled.div`
  width: 384px;
  height: 512px;

  position: absolute;

  right: 0;
  top: 40px;

  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  border-radius: 16px 0 0 16px;

  &.activePreviewCart {
    visibility: visible;

    transition: all 0.3s, visibility 0.3s;
    opacity: 1;
  }
  &.inactivePreviewCart {
    visibility: hidden;

    transition: opacity 0.3s, visibility 0.3s;
    opacity: 0;
  }

  padding: 1.5rem 2rem;

  background-color: var(--black-800);

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: var(--black-300);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--white-default);
  }
`
export const Content = styled.div`
  /* border-radius: 8px; */

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;

  .titleCartPreview {
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    font-size: 1rem;
    padding: 1.125rem 0;

    .finishedSale {
      width: fit-content;
      height: fit-content;

      padding: 0.5rem 0.75rem;

      background: var(--purple-300);
      border-radius: 6px;

      font-weight: 700;
      color: var(--white-default);

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
  .itemsInCart {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;

    gap: 8px 0;

    article {
      width: 100%;
      height: auto;

      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-start;

      gap: 0 8px;

      img {
        width: 64px;
        height: auto;
      }

      section {
        h3 {
          font-size: 0.875rem;
        }

        p {
          font-size: 0.75rem;
        }
      }

      h3 {
        font-size: 1rem;
        margin: 0 0 0 auto;
      }
    }
  }
`
