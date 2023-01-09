import styled from 'styled-components';
import Box from 'components/Box';

export const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

export const LogOutButton = styled.button`
  margin-right: auto;
  margin-left: auto;
  height: 24px;
  color: #ffffff;
  background-color: #2196f3;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border-radius: 4px;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    border: 1px solid #2136f3;
    background-color: #2136f3;
  }
`;
