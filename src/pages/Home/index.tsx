import { SmartTable } from "../../components/SmartTable "
import { SmartTableName } from "../../components/SmartTable /types"
import { Container } from "./styles"

export const Home = ()=>{
    return(<Container>
        <SmartTable name={ SmartTableName.Player }/>
    </Container>

        
       
)}