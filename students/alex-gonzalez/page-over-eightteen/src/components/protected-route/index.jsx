import {Navigate, useLocation} from 'react-router-dom';
/**
 * 1. obtener del localstorage la infor a validar
 * 2. Si no es valido, redirigimos a la página de esa validación
 *     ¿Como redirijo a la página de esa validación?
 *      --> <Navigate> del react-router-dom
 * 3. Si es válido pinto el componente de esa ruta. 
 * 
 * ¿De donde saco el componente de la ruta a la que se está navegando? 
 *      --> Este es el children
 */
function ProtectedRoute({children}){
    const isOverAge = localStorage.getItem('acceptance'); // paso 1
    const location = useLocation(); // window.location
    if(isOverAge === null || !isOverAge){ // null o false //paso 2
        return <Navigate to={`/accept-conditions?redirect=${location.pathname+location.search}`} state={{ from: location }} replace />
    }

    return children; // paso 3
}



export default ProtectedRoute;