import './style.css';
import { useContext } from 'react';
import { CurrencyContext } from '../currency/currency.context';

function Header(){
    const [currency, updateCurrency] = useContext(CurrencyContext);

    // actualizo el currency del context
    const changeCurrency = e => updateCurrency(e.target.value);

    return(
        <header>
            <p>Hey! Header</p>
            <div onChange={changeCurrency}>
                <label htmlFor="dollar">$</label>
                <input id="dollar" type='radio' name="currency" value='$'
                    defaultChecked={currency === '$'}></input>
                <label htmlFor="euro">€</label>
                <input id="euro "type='radio' name="currency" value='€'
                    defaultChecked={currency === '€'}></input>
            </div>
        </header>
    )
}

export default Header;