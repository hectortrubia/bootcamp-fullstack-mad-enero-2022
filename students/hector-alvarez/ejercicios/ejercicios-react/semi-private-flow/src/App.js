
<<<<<<< HEAD
=======
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> feature/miercoles-dieciseis-feb
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Region from './pages/region';
import Confirmacion from './pages/confirmacion';
import Login from './pages/login';
<<<<<<< HEAD
import Multi from './pages/multi';
=======
// import Multi from './pages/multi';
>>>>>>> feature/miercoles-dieciseis-feb
import Numb from './pages/numb';
import Userinfo from './pages/userinfo';
import { UserProvider } from './contexto/datos';
import ProtectedRoute from './routes/protected-route';
<<<<<<< HEAD
import ProtectedRouteLogin from './routes/protected-login';
=======
// import ProtectedRouteLogin from './routes/protected-login';
import Home from './pages/home';

>>>>>>> feature/miercoles-dieciseis-feb


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Region />}></Route>
<<<<<<< HEAD
          <Route path="/confirmacion" element={<Confirmacion />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/multi" element={
            <ProtectedRouteLogin><Multi />
            </ProtectedRouteLogin>}></Route>
          <Route path="/numb" element={
            <ProtectedRoute><Numb /></ProtectedRoute>}>
          </Route>
=======
          <Route path="/home" element={<Home />}></Route>
          <Route path="/confirmacion" element={<Confirmacion />}></Route>
          <Route path="/login" element={<Login />}></Route>
{/* 
          <Route path="/multi" element={
            <ProtectedRouteLogin><Multi /></ProtectedRouteLogin>}>
            </Route> */}

          <Route path="/numb" element={
            <ProtectedRoute><Numb /></ProtectedRoute>}>
          </Route>

>>>>>>> feature/miercoles-dieciseis-feb
          <Route path="/userinfo" element={<Userinfo />}></Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>

  )
}

export default App;