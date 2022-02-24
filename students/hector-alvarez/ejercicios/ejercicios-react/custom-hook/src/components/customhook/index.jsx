import { useCountries } from "../../data/countries/countries.hook";

function CustomHookExample() {
    const countries = useCountries();

    return (
        <ul>
            {countries.map(c => <li key={c.code}>{c.name_es}</li>)}
        </ul>
    )
}



export default CustomHookExample;