import styled from 'styled-components';

const ContentGrid = styled.section`
  display: grid;
  grid-template-rows: ${({ pathName }) =>
    pathName === '/' ? '1fr auto' : 'auto 1fr auto'};
`;

export default ContentGrid;
