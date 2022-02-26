// 1.Crear una aplicación de Reactjs, en nuestra  App.js guardaremos una variable de tipo  string que diga "hola Mundo", y la mostraremos en pantalla en un H1.



import './style.css';


let hol = 'hola mundo'

function HelloWorld () {

    return <h1>{hol}</h1>;
}


export default HelloWorld;