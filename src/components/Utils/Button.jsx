import styled from 'styled-components';

export const Button = styled.button`
  margin-right: auto;
  margin-left: auto;
  width: 200px;
  height: 50px;
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
