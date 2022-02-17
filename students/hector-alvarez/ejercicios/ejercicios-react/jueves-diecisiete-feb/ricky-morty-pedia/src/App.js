import logo from './logo.svg';
import './App.css';
import React from 'react';
import Pokelist from './components/pokelist/index.jsx';
import Nav from './components/nav/index.jsx';

function App() {
  return (
    <div className="App">

      <header>
        <Nav></Nav>
      </header>

      <body>
        <Pokelist></Pokelist>
      </body>

    </div>
  );
}

export default App;
