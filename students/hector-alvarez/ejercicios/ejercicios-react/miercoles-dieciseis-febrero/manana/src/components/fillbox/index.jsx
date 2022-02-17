import './style.css';


// 1- Comunicación hijo padre
// Crear un componente EmptyBox que sea un contenedor de 150px por 150px vacio.
//
// Crear un componente BoxContainer que use los dos componentes previos como se muestra en la imagen.
// Cuando haga hover sobre el componente EmptyBox deberá cambiar el color de fondo de FillBox a verde.





//  Crear un componente FillBox que sea un contenedor de 150px por 150px con un background color red.

// function Fillbox() {


//     return (

//         <div className='div_containerred'></div>
//     )
// }

// export default Fillbox;

// --------------------------------------------------


// Cuando haga hover sobre el componente EmptyBox deberá cambiar el color de fondo de FillBox a verde.

function FillBox(props){
    
    return <div style={{backgroundColor:props.color}} className='fill'></div>

}

export default FillBox
