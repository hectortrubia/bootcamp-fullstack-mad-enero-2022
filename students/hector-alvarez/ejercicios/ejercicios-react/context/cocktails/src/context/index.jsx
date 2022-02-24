import {createContext ,useState} from 'react';


const  numberContext = createContext()

function NumberProvider({children}) {
    
    
    let [number, updatenumber] = useState(0)

    const handlermas = () => {
        updatenumber(number+1);
    }

    return <numberContext.Provider value={{handlermas,number}}>
        {children}
    </numberContext.Provider>

}


export default numberContext
export {NumberProvider}