import styled from 'styled-components';

export const ContactItem = styled.li`
  border: 2px solid #2196f3;
  border-radius: 10%;
  background-color: #a2e7ed;

  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  width: 25%;

  &:focus,&:hover{
    border: 2px solid #2c21f3;
  }
`;


export const ButtonDelete = styled.button`
  height: 20px;
  width: 150px;

  background-color: black;
  color: white;
  border-radius: 4px;
  cursor: pointer;
`;