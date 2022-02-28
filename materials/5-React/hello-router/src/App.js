import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HelloPage from './pages/hello-page';
import Header from './components/header';
import CountriesList from './pages/countries-list';
import CountryDetail from './pages/country-detail';
import PokemonDetail from './pages/pokemon-detail';
import Contact from './pages/contact';
import Login from './pages/login';
import PrivateHome from './pages/private-home';
import PrivateRoute from './components/private-route';
import DemoQuery from './pages/demo-query';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <main>
        <Routes>
          <Route path='/hello' element={<HelloPage></HelloPage>}></Route>
          <Route path='/countries' element={<CountriesList />}></Route>
          <Route path='/countries/:code' element={<CountryDetail></CountryDetail>}></Route>
          <Route path='/pokemon/:id' element={<PokemonDetail/>}></Route>
          <Route path='/contact' element={<PrivateRoute><Contact/></PrivateRoute>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/private/home' element={<PrivateHome/>}></Route>
          <Route path='/operar' element={<DemoQuery></DemoQuery>}></Route>
        </Routes>
      </main>
      <p>Esto es despues de las página</p>
    </BrowserRouter>
  );
}

export default App;
