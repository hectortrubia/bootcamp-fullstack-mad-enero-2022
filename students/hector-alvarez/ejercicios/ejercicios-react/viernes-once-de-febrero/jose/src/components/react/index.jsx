// 4. Crea un componente React llamado Country, el cual recibirá  por Props el siguiente objeto que le enviaremos desde App.js y pintará por pantalla lo siguiente                                let  pais={name_en: "Afghanistan",   name_es: "Afganistán",   dial_code: "+93",code: "AF",  img:"https://www.despertaferro-ediciones.com/wp-content/uploads/2021/08/7408738172_4442b9be54_o.jpg"}




import './style.css';
import React from 'react';

function Country(props) {
  
    return (
        <article className='card__container'>
            <img className='card__img' src={props.country.img}></img>
            <div>
                <h2>{props.country.name_es}</h2>
                <hr></hr>
                <p className='card__content-ml'>Code: {props.country.code}</p>
                <hr></hr>
                <p className='card__content-ml'>Dial Code: {props.country.dial_code}</p>
                <hr></hr>
                <button className='card__content-ml card__button'>Buy tickets</button>
            </div>
        </article>
    )
}

export default Country;




