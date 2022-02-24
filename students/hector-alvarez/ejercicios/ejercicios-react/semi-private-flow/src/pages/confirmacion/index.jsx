import React from 'react';
import { useContext } from 'react';
import usercontext from '../../contexto/datos';



function Confirmacion() {
const {data} = useContext(usercontext)
console.log(data)


    return (

        <React.Fragment>

        <p>esto es confirmacion</p>

        </React.Fragment>
        

    )

}

export default Confirmacion