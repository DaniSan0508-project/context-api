import { useContext } from "react"; //use context do react

import {UserContext} from '../contexts/user' // Usercontext configurado

function Nomes(props){ //desnecessario uso de props
    const {alunos,setAlunos} = useContext(UserContext) //passa o contexto 
    return(
        <div>
            Bem vindo : {alunos}
         <button onClick={()=>setAlunos('Nome2')}>Mudar</button>
        </div>
       
        
    )
}

export default Nomes;