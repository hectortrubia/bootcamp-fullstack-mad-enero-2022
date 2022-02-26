import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/helloworld/index.jsx';
import Cuadro from './components/cuadro/index.jsx';
import Card from './components/card/index.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <HelloWorld></HelloWorld>
        <Cuadro></Cuadro> */}
        <Card></Card>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}

export default App;