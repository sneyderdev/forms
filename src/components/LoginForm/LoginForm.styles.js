import styled from 'styled-components';

import eye from '@images/eye.svg';

const LoginFormContainer = styled.form`
  text-align: right;

  div {
    position: relative;

    input {
      margin-bottom: 0;
    }

    span {
      width: 15px;
      height: 15px;
      position: absolute;
      top: calc(50% - 7.5px);
      right: 15px;
      background-image: url(${eye});
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
    }
  }

  a {
    display: inline-block;
    margin: 5px 0 20px;
  }
`;

export default LoginFormContainer;
