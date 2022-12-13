import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { GlobalStyle } from './styles/Global';
import { SmartTable } from './components/SmartTable ';
import { SmartTableName } from "./components/SmartTable /types";
import { Router } from "./Router";

export const App = () => {
  return (
    <div>
     <BrowserRouter>
        <Header />
       <Router/>
        <GlobalStyle/>
      </BrowserRouter>
    </div>
  );
};
