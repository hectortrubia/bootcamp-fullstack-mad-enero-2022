import Emptybox from '../emptybox';
import Fillbox from '../fillbox';
import React, { useState } from 'react';
import './style.css';


// 1- Comunicación hijo padre
// Crear un componente EmptyBox que sea un contenedor de 150px por 150px vacio.
// Crear un componente FillBox que sea un contenedor de 150px por 150px con un background color red.
// Crear un componente BoxContainer que use los dos componentes previos como se muestra en la imagen.
// Cuando haga hover sobre el componente EmptyBox deberá cambiar el color de fondo de FillBox a verde.





// Crear un componente EmptyBox que sea un contenedor de 150px por 150px vacio.
// Crear un componente BoxContainer que use los dos componentes previos como se muestra en la imagen.

// function BoxContainer() {



//     return (

//         <div className='box_container'>  {/*creo el contendor flexbox que afecta a los hijos*/}
//             <Emptybox></Emptybox>
//             <Fillbox></Fillbox>
//         </div>
//     )
// }

// export default BoxContainer;


// -------------------------------------------------------------

// Cuando haga hover sobre el componente EmptyBox deberá cambiar el color de fondo de FillBox a verde.

// Decirle a Emptybox que si le hacen hover avise a BoxContainer.
//Hacerle un evento a Emptybox.



function BoxContainer() {

    let[change,updatechange] = useState('red')
    
    const handler = background =>{
        updatechange(background)
      
    }
    return (
        <react.Fragment>
            <div className='container'>
                <EmptyBox handlerOn={handler}></EmptyBox>
                <FillBox color={change}></FillBox>
            </div>

        </react.Fragment>


    )

}



export default BoxContainer