

import './index.css';
import cerve from '../../assets/img/cervezas.png'

// 5. Crea un  componente Card como en la siguiente imagen, la imagen debe ser parte de tus archivos del proyecto react, y el boton sera otro componente llamado Boton.

function Card(){

        return  <div>
        <div className='container_card'>
            <img className='imagencerve' src={cerve}/>
            <h1>MadTree brewing</h1>
        </div>
        </div>
    }

    export default Card;
