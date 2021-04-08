import styled from 'styled-components';

const FormSection = styled.section`
  h2 {
    margin-bottom: 20px;
    font-weight: 500;
    font-size: ${({ theme }) => theme.sizes.l};
  }

  hr {
    margin: 25px 0 5px;
    border: none;
    overflow: visible;
    border-top: 1px solid ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.light};

    &::after {
      content: 'Or';
      display: inline-block;
      padding: 0 10px;
      transform: translateY(-50%);
      font-family: ${({ theme }) => theme.font.primary};
      font-size: ${({ theme }) => theme.sizes.n};
      background: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export default FormSection;
