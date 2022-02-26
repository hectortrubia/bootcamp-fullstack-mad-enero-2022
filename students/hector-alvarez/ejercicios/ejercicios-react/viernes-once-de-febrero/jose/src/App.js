

import './App.css';
// import HelloWorld from './components/helloworld/index.jsx';
// import Contenido from './components/contenido/index.jsx';
import Country from './components/react/index.jsx';

let pais = {
  name_en: "Afghanistan",
  name_es: "Afganistán",
  dial_code: "+93",
  code: "AF",
  img: "https://www.despertaferro-ediciones.com/wp-content/uploads/2021/08/7408738172_4442b9be54_o.jpg"
}



function App() {
  return (

    <div className="App">

    // {/* <HelloWorld></HelloWorld>
    // <Contenido name= 'esto viene del name de componente contenido y es un string' name2='hola mundo' ></Contenido> */}

    <Country country={pais}></Country>


    </div >
  );
}

export default App;
