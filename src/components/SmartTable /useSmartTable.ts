import { useEffect, useState } from "react";
import {
  TableData,
  getColumnsConfig,
  IColumn,
  
} from "./column";
import { SmartTableName } from "./types";

export const useSmartTable = (name: SmartTableName) => {
  const [column, setColumn] = useState<IColumn[]>([]);
  const [data, setData] = useState<TableData>([]);
  useEffect(() => {
    let isMounted = true;
    const { col, getData } = getColumnsConfig(name);
    getData().then((data) => {
    
      
      if (!isMounted) return;
      setColumn(col);
      setData(data);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return { column, data };
};
