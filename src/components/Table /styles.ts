import styled from "styled-components";

export const RowHeader = styled.tr`
  background: #111211;
  height: 3rem;
  color: white;
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
  display:flex;
  align-items: center;
  width: 4rem;
  height: 3rem;
  background: white;
  text-align: center;
  gap: 1rem;
  padding: 0 0.3rem;
`;
export const TrashStyled = styled.a`
  color: red;
  &:hover{
    color: blue;
  }
`
export const TableContainer = styled.div`
  width: 100%;
  border: 1px solid;
  max-height: 100%;
  overflow: auto;
  scrollbar-width: 20px;
`;
export const TableContent = styled.table`
  width: 100%;
  background: #676767;
`;
