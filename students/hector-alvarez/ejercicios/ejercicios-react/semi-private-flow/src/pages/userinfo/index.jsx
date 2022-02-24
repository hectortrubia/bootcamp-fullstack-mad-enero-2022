import React from 'react';
import './style.css'
import usercontext from '../../contexto/datos';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Userinfo() {
    const navigate = useNavigate();
    const {data,updatedata} = useContext(usercontext)

    const handlername = e => {
        e.preventDefault();
      
        updatedata(
            data.nombre=e.target.nombre.value,
            data.apellido=e.target.apellido.value,
            data.edad=e.target.edad.value,
            )
            localStorage.setItem('edad',e.target.edad.value)
            navigate('/numb')
        
    }
    console.log(updatedata)

    


    return (

        <React.Fragment>

            <form name="formulario" onSubmit={handlername}>

                <label htmlFor="nombre"></label>
                <input type="text" name="nombre" id="nombre" placeholder="Introduce tu nombre" />


                <label htmlFor="apellido"></label>
                <input type="text" name="apellido" id="apellido" placeholder="Introduce tu apellido" />

                <label htmlFor="edad"></label>
                <input type="number" name="edad" id="edad" placeholder="Introduce tu edad, debes ser mayor de edad" required />

                <button type="submit">Enviar</button>

            </form>


        </React.Fragment>


    )

}

export default Userinfo