import React from 'react';
import './style.css';


function Pokemon(props) {
    return (
        <React.Fragment>
            <div className="containercard">

                <div className="">
                    <img src={props.img}></img>
                </div>
                <div className="">
                    <p>{props.nombre}</p>
                    <p>{props.id}</p>
                    <p></p>
                </div>

            </div>



        </React.Fragment>



    )

}

export default Pokemon