import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    fetch('http://localhost:4000/')
    .then(j=>j.json())
    .then(r=>console.log(r))

  },[])
  return (
    <div className="App">
      <h2>Hola</h2>
   
    </div>
  );
}

export default App;
