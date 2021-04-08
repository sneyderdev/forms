import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  min-height: 100vh;

  @media screen and (min-width: 1024px) {
    grid-template-columns: minmax(40%, 450px) 1fr;
  }
`;

export default Grid;
