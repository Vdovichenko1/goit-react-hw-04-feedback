import styled from '@emotion/styled';

export const Button = styled.button`
  &:not(:last-child) {
    margin-right: 20px;
  }
  width: 100px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  background-color: black;
  color: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  transition: transform 300ms linear;

  &:hover {
    transform: scale(1.1);
  }
`;
