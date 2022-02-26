
// 2- Crear un componente llamado greeting que pinte un h1 con el texto hola


// function Greeting() {
    
//     return <h1>hola</h1>;
// }

// export default Greeting;


// ---------------------------------------------------------

// 3.Vamos a conseguir que el saludo del componente greeting sea variable. Para ello debemos permitir que el componente reciba una prop llamada name con el nombre a saludar. Añadir en el H1 el nombre para que el componente diga Hola Alex  si la prop tiene el valor Alex. Crear en el App.js varios componentes Greeting con diferentes nombres a saludar.



const saludos = { 
    name: 'Alex', 
    edad: 18
}
function Greeting() {
  


    return <h1>{`Hola ${saludos.name}`}</h1>;
}


export default Greeting;


