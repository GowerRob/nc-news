import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [userName, setUsername] = useState('grumpy19');

    return (
        <UserContext.Provider value={{userName, setUsername}}>
        ({children})
        </UserContext.Provider>
    )
}
