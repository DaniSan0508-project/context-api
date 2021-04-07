import Alunos from './Alunos'
import {useState} from 'react'
import UserProvider from './contexts/user'

function App() {

  let [nome,setNome] = useState('DaniSan'); // não precisa mais passar parametros por props

  return (
    <UserProvider>
      <div>
        <h1>
          ESCOLA
        </h1>
        <hr/>
        <Alunos/>
      </div>
    </UserProvider>
  );
}

export default App;
