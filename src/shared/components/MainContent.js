import styled from 'styled-components';

const MainContent = styled.main`
  width: 100%;
  place-self: center;
  text-align: center;

  h1 {
    margin-bottom: 40px;
    font-size: ${({ theme }) => theme.sizes.xl};

    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default MainContent;
