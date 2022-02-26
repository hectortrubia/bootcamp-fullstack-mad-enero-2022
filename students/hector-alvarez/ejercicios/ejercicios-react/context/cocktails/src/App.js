
<<<<<<< HEAD
=======
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> feature/miercoles-dieciseis-feb
import Home from './pages/home';
import Cockteles from './pages/cockteles';
import Details from './pages/details';
import Drinks from './pages/drinks';
<<<<<<< HEAD
import Info from './pages/drinks';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Nav from './components/nav';
=======
import Info from './pages/info';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navegador from './components/nav';

>>>>>>> feature/miercoles-dieciseis-feb

function App() {
  return (

    <BrowserRouter>

<<<<<<< HEAD
    <Nav></Nav>
=======
    <Navegador></Navegador>
>>>>>>> feature/miercoles-dieciseis-feb

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='cockteles' element={<Cockteles/>}></Route>
      <Route path='details' element={<Details/>}></Route>
      <Route path='drinks' element={<Drinks/>}></Route>
      <Route path='info' element={<Info/>}></Route>

    </Routes>


    </BrowserRouter>
  )

};

export default App;
