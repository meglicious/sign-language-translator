import { createContext, useContext, useState } from "react";
import { storageRead } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKeys";
//Context object responsible for exposing
const UserContext = createContext()
export const useUser = () =>{
    return useContext(UserContext) 
}
// Provider responsible for managing state
const UserProvider = ({ children }) => {
    const [ user, setUser] =useState(storageRead( STORAGE_KEY_USER))
    const state = { user, setUser }
    return (
        <UserContext.Provider value={ state }>
            { children}
        </UserContext.Provider>
    )
}
export default UserProvider