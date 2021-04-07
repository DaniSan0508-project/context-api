import Nomes from '../Nomes'

function Alunos(props){
    return(
        <Nomes nome={props.nome} setNome={props.setNome}/>
    )
}

export default Alunos;