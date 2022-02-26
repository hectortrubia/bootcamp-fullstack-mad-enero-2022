import './style.css';


// 1- Comunicación hijo padre
// Crear un componente EmptyBox que sea un contenedor de 150px por 150px vacio.
// Crear un componente FillBox que sea un contenedor de 150px por 150px con un background color red.
// Crear un componente BoxContainer que use los dos componentes previos como se muestra en la imagen.
// Cuando haga hover sobre el componente EmptyBox deberá cambiar el color de fondo de FillBox a verde.





// // Crear un componente EmptyBox que sea un contenedor de 150px por 150px vacio.

// function Emptybox() {



//     return (

//         <div className='div_containerempty'></div>
//     )
// }

// export default Emptybox;


// -----------------------------------------


// Cuando haga hover sobre el componente EmptyBox deberá cambiar el color de fondo de FillBox a verde.
// Para hacer over necesitamos hacer un evento en exmpybox porque es el que tiene que avisar al padre de que le acaban de pasar el raton por encima.


function EmptyBox({ handlerOn = () => { } }) {
    const handler = () => {
        handlerOn('green')
    }
    const handlerr = () => {
        handlerOn('red')
    }
    return (
        <div onMouseLeave={handlerr} onMouseOver={handler} className="empty" > </div>
    )
}

export default EmptyBox