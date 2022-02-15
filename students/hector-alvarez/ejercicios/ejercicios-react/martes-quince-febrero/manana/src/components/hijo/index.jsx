import './style.css';
import React, { useState } from "react";


// 1- Hello Comunicación hijo-padre: Crear dos componentes:
// Un componente hijo que tiene un input. Cuando se escriba en el input, se debe enviar su valor al padre.

// 1. Voy a crear un componente hijo que tenga un input ( hecho)
// 2. Se debe enviar su valor al padre. (hecho)
        // - Creo un componente padre (hecho)
        // -
// 3.Un componente padre que tenga el hijo y debajo un p. Este p debe pintar lo que se escriba en el input del hijo.



function Hijo (props){

    
    // const handleOnChange = e => { // escuchamos el cambio del input
    //     // necesito el nuevo value del input
    //     e.target.value;
    // }


    return (

            // <input type="text" onChange={handleOnChange}></input>
            <input type="text" onChange={(e)=> props.loquesea(e.target.value)}></input>
    )
}

export default Hijo;

