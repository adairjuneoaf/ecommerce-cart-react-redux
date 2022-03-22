import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

:root{
  --background: #262626;

  --black-300: #3B3C40;
  --black-800: #0D0D0D;

  --gray-300: #797979;

  --white-default: #F2F2F2;

  --blue-100: #2EF2F2;
  --blue-500: #44A1F2;

  --purple-300: #8B88F2;
}

html{
    @media(max-width: 1080px){
        font-size: 93.75%;
    }

    @media(max-width: 720px){
        font-size: 87.5%;
    }
}

body {
    background: var(--background);
    color: var(--white-default);
    -webkit-font-smoothing: antialiased;

  /* &::-webkit-scrollbar {
    width: 0.6rem;
  }

  &::-webkit-scrollbar-track {
    background: ;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ;
  } */
}

body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: var(--white-default);
}

p{
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
}

a{
    text-decoration: none;
}

h1, h2, h3, h4, h5, h6, strong{
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: var(--white-default);
}

button {
    cursor: pointer;
}

[disable] {
    opacity: 0.6;
    cursor: not-allowed;
}

.icon{
  font-size: 1.75rem;
  color: var(--white-default);

  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  transition: color 0.3s;

  &:hover{
    color: var(--purple-300)
  }
}

`
