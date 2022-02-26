
import Home from './pages/home';
import Cockteles from './pages/cockteles';
import Details from './pages/details';
import Drinks from './pages/drinks';
import Info from './pages/drinks';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Nav from './components/nav';

function App() {
  return (

    <BrowserRouter>

    <Nav></Nav>

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
