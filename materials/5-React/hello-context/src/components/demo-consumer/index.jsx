import {useContext} from 'react';
import { CurrencyContext } from '../currency/currency.context';

function DemoConsumer(){
    const [currency] = useContext(CurrencyContext);
    return <h1>Hello Demo Consumer. Mi moneda actual es: {currency}</h1>
}


export default DemoConsumer;