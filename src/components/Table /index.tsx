import {
  RowHeader,
  Row,
  TableContainer,
  TableContent,
  RowActions,
} from "./styles";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Pencil, Eye, Trash } from "phosphor-react";
import { deletePlayer } from "../../api /PlayerRequest";
import { Player } from '../../api /types';
import { useEffect } from 'react';
type ITable = {
  col: ColumnDef<unknown>[];
  dat: unknown[];
};

export const Table = ({ col, dat }: ITable) => {
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
    console.log(data);
    
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
                <a onClick={()=>{handleDelet(row.index)}}
                >
                  <Trash />
                </a>
              </RowActions>
            </tr>
          ))}
        </tbody>
      </TableContent>
    </TableContainer>
  );
};
