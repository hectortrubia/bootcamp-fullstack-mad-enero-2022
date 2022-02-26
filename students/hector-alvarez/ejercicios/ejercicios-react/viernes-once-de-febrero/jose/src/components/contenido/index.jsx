// 2.Crea un componente react llamado Contenido, el cual recibirá por Props la variable de tipo string que le enviaremos desde App.js. Pintala por pantalla.


import './style.css';
import Text from '../text/index.jsx';
import { Fragment } from 'react';

function Contenido(props) {

    return (
        <div>
            <Text>{props.name2}</Text>
            <h1>{props.name}</h1>
        </div>
    )
}


export default Contenido;