import logo from './logo.svg';
import './App.css';
import Ejer1 from './components/ejer1/index.jsx';
import Ejer2 from './components/ejer2/index.jsx';
import Ejer3 from './components/ejer3/index.jsx';
import Avatar from './components/ejer4avatar/index.jsx';





function App() {
  return (
    <div className="App">


      {/* Ejercicio 1 de Jose */}

      <Ejer1></Ejer1>
      <br></br>

      {/* Ejercicio 2 jose */}

      <Ejer2></Ejer2>
      <br></br><br></br>

      {/* Ejercicio 3 jose */}

      <Ejer3></Ejer3>

      <br></br><br></br>

      {/* Ejercicio 4 jose */}

      <Avatar></Avatar>
      

    </div>
  );
}

export default App;
