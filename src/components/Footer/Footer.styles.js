import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 15px 0;
  text-align: center;
  align-self: end;
  font-size: ${({ theme }) => theme.sizes.s};
  color: ${({ theme }) => theme.colors.light};

  a {
    color: ${({ theme }) => theme.colors.light};

    &:hover {
      text-decoration: underline;
      text-decoration-color: ${({ theme }) => theme.colors.light};
    }
  }
`;

export default FooterContainer;
