import styled from 'styled-components';

export const Form = styled.form` 
  max-width: 30%;
  margin: 70px 0 0 70px;
`;

export const Label = styled.label` 
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  min-height: 40px;
  padding: 0px 5px;
  border-radius: 10px;
  border: 1.5px solid black;
  font-size: 20px;
  background-color: transparent;
`;

export const Button = styled.button`
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  font-weight: 700;
  font-size: 18px;
  color: #000000;
  border-radius: 7px;
  border: 1.5px solid #000000;
  background-color: transparent;
  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: #ffffff;
  }
`;

export const Text = styled.p`
  font-size: 24px;
`;