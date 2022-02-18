import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


function Nav() {

    return (

        <nav>
            <div className='nav_container'>
                <Link to="/contact">
                    <img src="https://pokeapi.co/static/pokeapi_256.3fa72200.png"></img>
                </Link>
                <input className='input'></input>
                <Link to="/contact">
                    <h2>Suscríbete</h2>
                </Link>
            </div>
        </nav>

    )

}

export default Nav