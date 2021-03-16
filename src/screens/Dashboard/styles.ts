import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormInterface {
  hasError: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 42px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

`;

export const Subtitle = styled.h2`
`

export const Form = styled.form<FormInterface>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 14px;
    width: 280px;
    border: 2px solid #fff;
    border-right: 0px;
    border-radius: 5px 0 0 5px;
    &::placeholder {
      color: #a8a8b3;
    }
    ${({ hasError }) =>
      hasError &&
      css`
        border-color: #c53030;
      `}
  }

  button {
    width: 100px;
    height: 70px;
    border-radius: 0 5px 5px 0;
    background: #0A2463;
    border: 0;
    color: #FAC748;
    font-weight: bold;
    transition: background-color 0.5s;

    &:hover {
      background: ${shade(0.2, '#0A2463')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 10px;
`;

export const Starships = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #0A2463;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.4s;

    & + a {
      margin-top: 10px;
    }
    &:hover {
      transform: translateX(10px);
    }


    div {
      margin-left: 16px;
      padding: 0 10px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #FAC748;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
      }
    }
  }
`;

export const Img = styled.img`
  max-width: 40%;
  border-radius: 10px;
  border: 5px solid #d9d9d9
`