import React from 'react';
import './style.css';


function Pokecard(props) {

    return (
        <React.Fragment>

            <div className="card_container">
                <img alt="bulbasur" src={props.img}></img>
                <div className="info_container">
                    <h1>{props.name}</h1>
                    <p>{props.id}</p>
                    <p></p>
                </div>
            </div>

        </React.Fragment>


    )

}

export default Pokecard