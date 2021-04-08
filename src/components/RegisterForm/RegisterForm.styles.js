import styled from 'styled-components';

import check from '@images/check.svg';

const RegisterFormContainer = styled.form`
  text-align: left;

  div:last-of-type {
    margin-bottom: 20px;
  }

  input[type='checkbox'] {
    display: none;
  }

  label {
    display: block;
    padding-left: 25px;
    position: relative;

    &::before {
      content: '';
      display: inline-block;
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
`;

export default RegisterFormContainer;
