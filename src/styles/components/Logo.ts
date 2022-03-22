import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  .text {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 1.875rem;
    color: var(--white-default);

    position: relative;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;

    &::after {
      position: absolute;

      content: '';
      width: 10px;
      height: 10px;

      bottom: 7px;
      right: -10px;

      border-radius: 5px;

      background: var(--purple-300);
    }
  }
`
