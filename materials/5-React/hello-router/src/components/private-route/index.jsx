import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({children}){ // deconstruyo el objeto props para obtener el children del component
    // En este componente quiero que si no estamos logados, navegamos al login. Si estamos logados pintamos el children
    const user = localStorage.getItem('user'); // obtengo del local storage si el usuario está logado o no
    const location = useLocation(); // obtenemos el objeto de navegación del BOM para pasarselo al componente Navigate

    if (user === null) {// si el usuario NO está logado redirigo al login
        return <Navigate to="/login" state={{ from: location }} replace />; // es un componente DOM que realiza navegaciones de manera automática
    }

    // ¿Como pinto el children?
    return children; // esto devuelve el DOM que se haya puesto como children al usarse este componente
}

export default PrivateRoute;