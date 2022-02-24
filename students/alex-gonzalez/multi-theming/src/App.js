import './App.css';
import Header from './components/header';
import Footer from './components/footer';

function App() {


  return (
    <div className="app">
      <Header></Header>
      <main>
        <button className='btn--primary'>Esto es un botón primario</button>
        <div className='container--primary'>
          <p>Esto es un contenedor primario</p>
        </div>
        <div className='container--secondary'>
          <p>Esto es un contenedor Secundary</p>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
