import './style.css';
import { useNavigate, useSearchParams } from 'react-router-dom';


function AcceptOverAge() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const acceptConditions = () => {
        // guardar la info en el local
        localStorage.setItem('acceptance', true);
        // redirigir a la página que diga el query param redirect o sino la página por defecto
        navigate(searchParams.get('redirect') ?? '/');

    }

    return (
        <section>
            <h1>Pagina Over Age</h1>
            <div>
                <p>Debe aceptar los término y condiciones. En este caso Debes ser mayor de Edad</p>
                <button onClick={acceptConditions}>Aceptar que soy mayor de Edad</button>
            </div>
        </section>
    )

}


export default AcceptOverAge;