import Hijo from '../hijo';
import './style.css';
import React, { useState } from "react";


// 1- Hello Comunicación hijo-padre: Crear dos componentes:
// Un componente hijo que tiene un input. Cuando se escriba en el input, se debe enviar su valor al padre.

// 1. Voy a crear un componente hijo que tenga un input ( hecho)
// 2. Se debe enviar su valor al padre.
        // - Creo un componente padre (hecho)

// 3.Un componente padre que tenga el hijo y debajo un p. Este p debe pintar lo que se escriba en el input del hijo.


function Padre() {

    const [name, updateName] = useState('');


    const handleOnChange = valorinp => { // escuchamos el cambio del input
        // necesito el nuevo value del input
        updateName(valorinp);
    }


    return (
        <React.Fragment>
        <Hijo loquesea= {handleOnChange} ></Hijo>
        <p >{name}</p>
        </React.Fragment>
    )
}

export default Padre;

