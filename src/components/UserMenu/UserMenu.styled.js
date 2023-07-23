import styled from 'styled-components';

export const WrapperUserMenu = styled.div` 
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
`;

export const UserName = styled.p` 
  font-weight: 700;
  font-size: 18px;
`;

export const Span = styled.span` 
  color: #523a0e;
`;

export const Button = styled.button` 
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  font-weight: 700;
  font-size: 18px;
  color: #2a363b;
  border-radius: 7px;
  border: 2px solid #2a363b;
  background-color: transparent;
  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: #ffffff;
  }
`;