
import './style.css';
import React, { useState } from 'react'; // importamos solo la propiedad useState de todo el objeto React


// 2. En tu app react crea un componente que tenga un boton que al darle click se actualice el color del fondo del boton a verde.


function Ejer2() {
    
    let [color, updateCounter] = useState("color");

    const handleClickcol = () => {
       updateCounter("newcolor"); // uso la función de actualización para cambia el valor y refrescar el componente
    }
    return (
        <button onClick={handleClickcol} className={color}> Cambiar el color de fondo del boton</button >
    )
}

export default Ejer2;