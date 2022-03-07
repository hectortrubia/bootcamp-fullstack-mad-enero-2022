import './App.css';
import Header from './components/header';
import Home from './pages/home';
import Register from './pages/register';
import Detail from './pages/detail';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/usuarios/:id' element={<Detail />}></Route>
        <Route path='*' element={<Navigate to='/home'></Navigate>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
