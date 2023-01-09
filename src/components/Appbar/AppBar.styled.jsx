import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Box from 'components/Box';


export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #2196f3;

  font-size: 26px;
  font-weight: 400;
  font-family: 'Times New Roman', Times, serif;

  &:hover,&:focus{
    color: #2159f3;
  }
`;

export const ButtonWrapper = styled(Box)`
  display: flex;
  gap: 10px;
`;
