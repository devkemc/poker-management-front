import {
  RowHeader,
  TableContainer,
  TableContent,
  RowActions,
  TrashStyled,
} from "./styles";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Trash } from "phosphor-react";
import { deletePlayer } from "../../api /PlayerRequest";
import { Player } from '../../api /types';
import { Row } from './styles';
import { useState } from "react";
import { AtualizarModal, DataAtualizar } from "../../pages/Atualizar";

type ITable = {
  col: ColumnDef<unknown>[];
  dat: unknown[];
};

interface playerUpdate{
  nome:string,
  apelido:string,
  email:string,
  senha:string,
  cpf:string
}

export const Table = ({ col, dat }: ITable) => {
  const [modalIsActive, setModalIsActive] = useState(false)
  const columns = col;
  const data = dat;
  const tableInstace = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  function handleDelet(index:number){
    let player = data[index] as Player;
    deletePlayer(player)
    console.log(player);
    
  }
  const { getHeaderGroups, getRowModel } = tableInstace;
  return (
    <TableContainer>
      <TableContent>
        <thead>
          {getHeaderGroups().map((headerGroup) => (
            <RowHeader>
              {headerGroup.headers.map((header) => (
                <th>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
              <th>ACTIONS</th>
            </RowHeader>
          ))}
        </thead>

        <tbody>
          {getRowModel().rows.map((row) => (
            <tr>
              {row.getVisibleCells().map((cell) => (
                <Row>
                  {" "}
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Row>
              ))}
              <RowActions>
                <AtualizarModal { ...data[row.index] as DataAtualizar}/>
                <TrashStyled onClick={()=>{handleDelet(row.index)}}>
                  <Trash />
                </TrashStyled>
              </RowActions>
            </tr>
          ))}
        </tbody>
      </TableContent>
      
    </TableContainer>
  );
};
