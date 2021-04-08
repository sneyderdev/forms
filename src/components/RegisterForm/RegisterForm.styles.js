import styled from 'styled-components';

import check from '@images/check.svg';

const RegisterFormContainer = styled.form`
  text-align: left;

  div:last-of-type {
    margin-bottom: 20px;
  }

  input[type='checkbox'] {
    width: 0;
    height: 0;
    border: 0;
  }

  label {
    display: inline-block;
    padding-left: 25px;
    position: relative;
    cursor: pointer;

    &::before {
      content: '';
      display: block;
      width: 15px;
      height: 15px;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.colors.tertiary};
      background: ${({ theme }) => theme.colors.tertiary};
    }
  }

  input[type='checkbox']:checked + label::before {
    border-color: ${({ theme }) => theme.colors.active};
    background: ${({ theme }) => theme.colors.active} url(${check}) center
      no-repeat;
  }

  @media screen and (min-width: 1024px) {
    div:first-of-type {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
  }
`;

export default RegisterFormContainer;
