import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';


function Pokemon(props) {
    return (

        <Link to={`details/${props.id}`} state = {{ from:props}} >

        <React.Fragment>

        
            <div className="containercard">

                <div className="img_container">
                    <img style={{width:"150px"}} src={props.img}></img>
                </div>
                <div className="info_container">
                    <p>{props.nombre}</p>
                    <p>{props.id}</p>
                    {props.type[0].map((v, i) => <p>{(v.type.name)}</p>)}
            
                </div>

            </div>



        </React.Fragment>
        
        </Link>



    )

}

export default Pokemon