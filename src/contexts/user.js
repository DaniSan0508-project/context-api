
import { useState,createContext } from "react";

export const UserContext = createContext({});

 


function UserProvider({children}){

    const [alunos,setAlunos] = useState('DaniSanTESTE');   

    return(
        <UserContext.Provider value={{alunos,setAlunos}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;