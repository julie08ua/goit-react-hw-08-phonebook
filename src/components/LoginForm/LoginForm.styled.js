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
  color: #ffffff;
  background-color: #523a0e;
  border-radius: 7px;
  border: none;
  transition: border 250ms linear;

  &:hover,
  &:focus {
    border: 2px solid black;
  }
`;