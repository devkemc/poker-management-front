import styled from "styled-components";

export const RowHeader = styled.tr`
  background: ${(props) => props.theme["White-100"]};
  height: 3rem;
  max-width: 100%;
`;

export const Row = styled.td`
  width: 22rem;
  height: 3rem;
  background:white;
  text-align: center;
  color: black;
`;
export const RowActions = styled.td`
  width: 3rem;
  height: 3rem;
  background: white;
  color: red;
  text-align: center;
  &:hover{
    color: blue;
  }
`;
export const TableContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 1px solid;
  max-height: 100%;
  overflow: auto;
  scrollbar-width: 20px;
`;
export const TableContent = styled.table`
  width: 100%;
  background: ${(props) => props.theme["White-100"]};
`;
