import { listPlayer } from '../../api /PlayerRequest';
import { PlayerList } from '../../api /types';
import { SmartTableName } from './types';

export type TableData = PlayerList;
export type IColumn = {
  header: string;
  accessorKey: string;
};

export function getColumnsConfig(name: SmartTableName) {
  let col: IColumn[];
  let getData: () => Promise<TableData>;
  switch (name) {
    case SmartTableName.Player:
      col = Player;
      getData = listPlayer;
      break;
    default:
      col = [];
      getData = async () => [];
      break;
  }
  return { col, getData };
}
const Player = [
  {
    header: "APELIDO",
    accessorKey: "apelido",
  },
  {
    header: "EMAIL",
    accessorKey: "email",
  },
  {
    header: "NASCIMENTO",
    accessorKey: "data_nascimento",
  },
  {
    header: "CPF",
    accessorKey: "cpf",
  },
  {
    header:"DATA CRIAÇÃO",
    accessorKey:"created_at"
  },
  {
    header:"ULTIMA ALTERAÇÃO",
    accessorKey:"last_update"
  }
  
];

