import { useEffect, useState } from 'react';
import { getCountries } from './countries';


export const useCountries = () => {
    const [countries, updateCountries] = useState([]);

    useEffect(() => {
        getCountries().then(c => updateCountries(c));
    }, []);

    return countries;
}