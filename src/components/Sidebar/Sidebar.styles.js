import styled from 'styled-components';

const SidebarContainer = styled.aside`
  display: none;
  width: 100%;
  padding: 20px;
  background: ${({ theme }) => theme.colors.primary};

  div {
    display: grid;
    place-items: center;

    &:last-child {
      align-items: end;
      justify-content: start;
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.sizes.xl};
  }

  @media screen and (min-width: 1024px) {
    display: grid;
  }
`;

export default SidebarContainer;
