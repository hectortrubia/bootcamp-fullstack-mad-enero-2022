
import './style.css';
import React, { useState } from 'react'; // importamos solo la propiedad useState de todo el objeto React


// 3. Crea un componente que actualice en un p lo que el usuario vaya escribiendo en un input (onChan..).




function Ejer3() {

    let [title, updateTitle] = useState('');


    const handleinputname = (e) => {
       let inputValue = e.target.value;
        updateTitle(inputValue);
    
         }
        

    return (
        <React.Fragment>
                <input onChange={handleinputname} type="text"></input>
                <p>{title}</p>
        </React.Fragment>
    )
}

export default Ejer3;