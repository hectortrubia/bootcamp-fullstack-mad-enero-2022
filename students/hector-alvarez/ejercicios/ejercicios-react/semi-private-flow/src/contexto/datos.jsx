import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

const usercontext = createContext()

function UserProvider({children}){
    const edad =localStorage.getItem('edad')
    let[data,updatedata]=useState({});
    
    return <usercontext.Provider value={{data,updatedata}}> {children} </usercontext.Provider>


}

export default usercontext
export {UserProvider}