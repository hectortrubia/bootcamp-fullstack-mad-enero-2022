import { CurrencyContext } from "./currency.context";
import { useState } from 'react';

// Este es el componeten wrapper que expone funciones de actualización
function CurrencyProvider({ children }) {
    const currencyState = useState('$');

    return (
        <CurrencyContext.Provider value={currencyState}>
            {children}
        </CurrencyContext.Provider>
    )
}

export default CurrencyProvider;