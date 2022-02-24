import './App.css';
import React from 'react';
import Pokelist from './pages/pokelist/index.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/contact';
import Details from './pages/details';
import Notfound from './pages/notfound';
import Nav from './components/nav';
import Info from './pages/info';



function App() {
  return (


    <BrowserRouter>
      <header>
        <Nav></Nav>
      </header>

      <Routes>
        <Route path="/" element={<Pokelist></Pokelist>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
        <Route path="details/:id" element={<Details></Details>}>
        <Route path="info" element={<Info></Info>}/>
        </Route>

        <Route path="/*" element={<Notfound></Notfound>}></Route>

      </Routes>


    </BrowserRouter>
  );
}

export default App;
