import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationLink = styled(NavLink)` 
 display: inline-block;
  text-decoration: none;
  padding: 10px;
  font-weight: 700;
  font-size: 18px;
  color: #2a363b;
  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: #ffffff;
  }

  &.active {
    color: #ffffff;
    background-color: #523a0e;
    border-radius: 7px;
  }
`;