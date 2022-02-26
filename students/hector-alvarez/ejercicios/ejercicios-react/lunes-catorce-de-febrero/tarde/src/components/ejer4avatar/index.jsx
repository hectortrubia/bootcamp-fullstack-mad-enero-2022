
import './style.css';
import React, { useState } from 'react'; // importamos solo la propiedad useState de todo el objeto React


// 4.  Vamos a crear una lista de contactos como en la siguiente imagen, para eso nos vamos a crear un componente llamado Avatar que va a recibir por Props un array y deberá pintar los avatares, el color verde nos indicara el online, al darle click sobre la imagen nos deberá cambiar el opacity de la imagen y el color a rojo offline, para esto debemos valernos de los eventos en react y del state.

function Avatar(props) {


let contacts = [
    {
        img: `https://randomuser.me/api/portraits/men/1.jpg`,
        name: "pepe"
    },
    {
        img: `https://randomuser.me/api/portraits/women/2.jpg`,
        name: "carla"
    },
    {
        img: `https://randomuser.me/api/portraits/men/3.jpg`,
        name: "andres"
    },
    {
        img: `https://randomuser.me/api/portraits/women/4.jpg`,
        name: "andrea"
    },
    {
        img: `https://randomuser.me/api/portraits/men/5.jpg`,
        name: "victor"
    },
    {
        img: `https://randomuser.me/api/portraits/men/6.jpg`,
        name: "jose"
    },


];

{contacts.map((c, i) => <Avatar key={i} cImage={c.img} cName={c.name}></Avatar>)}


    return (
        <div className='main_container'>
            <div className='green_nav'>CONTACTS</div>
            <div className='circle_container'>
                <img className='circuloimagen' src={props.c.img}/>
                    <div className='circuloonline'></div>
            </div>

        </div>
    )
}



export default Avatar;


// <div className='container_on_off'>
//                 <img onClick={clickEnFoto} className='photos' src={props.cImage}></img>
//                 <div className='on_off'></div>
//             </div>