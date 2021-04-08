import styled from 'styled-components';

const HomeSection = styled.section`
  h2 {
    font-weight: 500;
    font-size: ${({ theme }) => theme.sizes.l};
  }

  div {
    display: grid;
    margin-top: 20px;
    row-gap: 20px;
  }

  a {
    height: 50px;
    line-height: 50px;
    font-weight: bold;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};

    &:first-child {
      background: ${({ theme }) => theme.colors.primary};
    }

    &:last-child {
      background: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;

export default HomeSection;
