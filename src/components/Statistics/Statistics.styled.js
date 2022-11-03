import styled from '@emotion/styled';

export const Stat = styled.ul`
  list-style: square;
  font-size: 16px;
  color: darkblue;
  font-weight: bold;
  text-align: start;
  justify-content: space-between;
`;

export const StatList = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
