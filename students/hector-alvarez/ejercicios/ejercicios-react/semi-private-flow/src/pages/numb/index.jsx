import React from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';

function Numb() {

    const navigate = useNavigate()
    const handler = e=> {
        navigate(`/multi?op1=${e.target.num1.value}&op2=${e.target.num2.value}`)

        localStorage.setItem('op1',e.target.num1.value)
        localStorage.setItem('op2',e.target.num2.value)

         navigate('/login')
    }

    return (

        <React.Fragment>


            <form onSubmit={handler}>

                <label htmlFor="nombre"></label>
                <input type="number" name="num1" id="nombre" placeholder="Introduce un numero" />


                <label htmlFor="apellido"></label>
                <input type="number" name="num2" id="apellido" placeholder="Introduce otro numero" />

                <button type="submit">Enviar</button>

                </form>

        </React.Fragment>


    )

}

export default Numb