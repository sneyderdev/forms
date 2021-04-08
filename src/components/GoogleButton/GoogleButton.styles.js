import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border: 0;
  outline: 0;
  border-radius: 10px;
  cursor: pointer;
  transition: all 200ms;
  font-family: ${({ theme }) => theme.font.primary};
  font-size: ${({ theme }) => theme.sizes.n};
  background: ${({ theme }) => theme.colors.white};

  img {
    margin-right: 10px;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

export default Button;
