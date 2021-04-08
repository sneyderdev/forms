import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 15px;
  padding-left: 15px;
  border: 1px solid transparent;
  outline: 0;
  border-radius: 10px;
  font-family: ${({ theme }) => theme.font.primary};
  font-size: ${({ theme }) => theme.sizes.n};
  color: ${({ theme }) => theme.colors.light};
  background: ${({ theme }) => theme.colors.tertiary};

  &[type='submit'] {
    margin-bottom: 0;
    font-weight: bold;
    border: 0;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.light};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.active};
  }
`;

export default Input;
