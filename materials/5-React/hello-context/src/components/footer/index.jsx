import './style.css';
import {useContext} from 'react';
import { CurrencyContext } from '../currency/currency.context';

function Footer(){
    const [currency] = useContext(CurrencyContext);
    return (
        <footer>
            <p>Hey! Footer. This is my Currency: {currency}</p>
        </footer>
    )
}

export default Footer;