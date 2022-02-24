import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import AcceptOverAge from './pages/accept-over-age';
import Home from './pages/protected/home';
import ProtectedRoute from './components/protected-route';

/**
 * ¿Qué necesito?
 * 
 * 1. En la pagina de aceptar, crear la estructura para que se acepte alguna condición. 
 *    Cuando le demos al botón de aceptar, 
 *      - debo almacenar la información de aceptación en el localstorage
 *      - redirigir a la página por defecto despues de aceptar
 * 2. Hacer que solo se pueda navegar a la Home si cumple que es mayor de edad.
 *    - Crear un componente que se llama PrivateRoute (ProtectedRoute) (RouteOverAge)
 *    - Esta página SOLO pinta el hijo si se cumple una cierta condición
 *    - Si no se cumple la condicion redirigimos a la página de aceptar esa condicion (Login, AcceptOverAge, ...)
 * 
 * 
 */

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <main>
        <Routes>
          <Route path='/accept-conditions' element={<AcceptOverAge />}></Route>

          <Route path='/' element={
            <ProtectedRoute>
              <Home /> {/*Esto es el children dentro de ProtectedRoute*/}
            </ProtectedRoute>
          }></Route>

        </Routes>

      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
