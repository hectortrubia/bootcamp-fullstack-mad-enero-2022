import './style.css';
import React, { useState, useEffect } from "react";


//2- Llamando a un API:  Hello world. Crear un componente que realice una llamada al JSON de paises(GET, https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json) y pinte la lista de países con la siguiente estructura (${name_es} ${dial_code})
// Añadir un input de tipo text antes de la lista. Cuando escriba en la lista, se debe ir filtrando y aparecer los países que su nombre en español contenga el texto del usuario.



function Paises() {
        let [cadaPais, updateCountries] = useState(['']);
        let [cadaPaisFilter, updateCountriesFilter ] = useState([''])
    
        const handleOnChange = e => { // escuchamos el cambio del input
            // necesito el nuevo value del input
            const newValue = e.target.value;
            const newArray = cadaPais.filter(a => a.name_es.toLowerCase().includes(newValue));
            updateCountriesFilter(newArray); // actualizar el state con el array filtrado del ARRAY original
        }
    
        useEffect(() => {
    
            fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
                .then(r => r.json())
                .then(c => {
                    updateCountries(c.countries)
                    updateCountriesFilter(c.countries)
                })
    
        }, []);
    
    
        return (
            <React.Fragment>
                <input onChange={handleOnChange} type="text" />
                <ul>
                    {cadaPaisFilter.map((c, i) => <li key={i}>{c.name_es}, {c.dial_code}</li>)}
                </ul>
            </React.Fragment>
        )
    }

    export default Paises