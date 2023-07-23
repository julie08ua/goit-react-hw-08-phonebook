import styled from 'styled-components';

export const ContactsItem = styled.li`
    margin: 5px 0 0 70px;
    max-width: 30%;
    display: flex;
    font-size: 28px;
    font-weight: 600;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
`;

export const Button = styled.button`
  margin: 5px 10px;
  font-size: 18px;
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 250ms linear;
  border: 1.5px solid c;
  box-shadow: 0 1px 6px 0 #20212447;
  color: #000000;
  background-color: transparent;
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #a1c6cf;
`;
