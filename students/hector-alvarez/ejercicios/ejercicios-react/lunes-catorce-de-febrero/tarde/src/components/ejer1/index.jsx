


// Crea una aplicación React con dos botones como en la siguiente imagen, valiéndonos del State al darle click al de + deberá sumar 1 y al de - restar un numero.

   
import './style.css';
import React, { useState } from 'react'; // importamos solo la propiedad useState de todo el objeto React



 function Ejer1() {
    console.log('Llamo a la función del componente LifeCycleExample');
 
                           
    let [counter, updateCounter] = useState(0);

    const handleClicksum = () => {
        updateCounter(++counter); // uso la función de actualización para cambia el valor y refrescar el componente
        console.log('Se ha pulsado el click ', counter);
    }


    const handleClickrest = () => {
        updateCounter(--counter); // uso la función de actualización para cambia el valor y refrescar el componente
        console.log('Se ha pulsado el click ', counter);
    }
    return (
        <React.Fragment>
            
            {/* <button onClick={() => updateCounter(++counter)}>+</button> */}
            <button onClick={handleClicksum}>+</button>
            <p>{counter}</p>
            <button onClick={handleClickrest}>-</button>
        </React.Fragment>
    )
}


export default Ejer1;