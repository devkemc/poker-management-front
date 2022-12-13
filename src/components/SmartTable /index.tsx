import { Table } from "../Table ";
import { SmartTableName } from "./types";
import { useSmartTable } from "./useSmartTable";

interface ISmartTable {
  name: SmartTableName
}

export const SmartTable = ({ name }: ISmartTable) => {
  const { column, data } = useSmartTable(name);
  
  return <Table col={column} dat={data} />;
};
