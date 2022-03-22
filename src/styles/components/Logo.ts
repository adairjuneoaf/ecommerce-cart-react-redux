import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  .left,
  .right {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 1.875rem;
    color: var(--white-default);
  }

  div {
    width: 10px;
    height: 10px;

    bottom: 0;

    border-radius: 5px;

    margin: 16px 1px 0 1px;

    background: var(--purple-300);
  }
`
