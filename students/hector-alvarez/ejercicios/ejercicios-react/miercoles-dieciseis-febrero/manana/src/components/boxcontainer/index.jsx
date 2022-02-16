import Emptybox from '../emptybox';
import Fillbox from '../fillbox';
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

    let [counter, updateCounter] = useState('div_containerred');

    const handler = () => {
        updateCounter(color); // uso la función de actualización para cambia el valor y refrescar el componente

    }



    return (

        <div className='box_container'>

            <Emptybox onMouseOver={handler}></Emptybox>
            <Fillbox color={props.style.background = 'red'} ></Fillbox>

        </div>

    )
    }

export default BoxContainer;
