
import { useEffect } from 'react';
import Navegador from './components/navegador.jsx';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listado from './pages/listado';
import CardList from './pages/details';
import Contacto from './pages/contacto';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';






function App() {
  useEffect(() => {
    fetch('http://localhost:4003/')
      .then(j => j.json())
      .then(r => console.log(r))

  }, [])
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navegador></Navegador>

        <Routes>
          <Route path="/" element={<Listado></Listado>}></Route>
          <Route path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route path="/details" element={<CardList></CardList>} ></Route>
        </Routes>

      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;