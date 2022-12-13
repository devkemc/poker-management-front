import { Route, Routes } from "react-router-dom";
import { Cadastro } from "./pages/Cadastro";
import { Home } from "./pages/Home";

export const Router =()=>{
    return(
        <Routes>
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}