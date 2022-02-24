import { useNavigate } from 'react-router-dom';

function PrivateHome() {
    const user = localStorage.getItem('user'); // obtengo la info del usuario
    const navigate = useNavigate();


    const logoutClick = () => {
        // llamar al backend para logout
        localStorage.removeItem('user'); // limpiamos la info del usuario
        navigate('/countries'); // navego a la home pública
    }

    return (
        <section>
            <h1>Página privada, solo para usuarios importantes como {user}</h1>
            <button onClick={logoutClick}>Log out</button>
        </section>
    )
}


export default PrivateHome;