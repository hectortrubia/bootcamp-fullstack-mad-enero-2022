import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import DemoConsumer from './components/demo-consumer';
import CurrencyProvider from './components/currency/currency.provider';

function App() {
  return (
   <CurrencyProvider>
     <div className='main__container'>
      <Header></Header>
      <DemoConsumer></DemoConsumer>
      <Footer></Footer>
     </div>
   </CurrencyProvider>
  );
}

export default App;
