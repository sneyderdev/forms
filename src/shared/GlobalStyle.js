import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${({ theme }) => theme.font.primary};
    font-size: ${({ theme }) => theme.sizes.n};
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.secondary};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.active};
  }
`;

export default GlobalStyle;
