# Rutas privadas

Necesitamos lo siguiente:

1. Hacer una página pública Login, donde el usuario pueda indicar quien es.
2. El login idealmente lo enviaremos al back, quien nos dirá si ese usuario/pass son correctos.
3. Si son incorrectos, nos quedamos en la página de login mostrando el error
4. Si es correcto, redirigimos a la página principal privada del usuario (la que nosotros decidamos).
5. Crear la página privada.
6. De algún lugar necesitamos saber si existe usuario o no.
    - Utilizar localstorage/sessionstorage.
    - Utilizar el Context de react (del tema 4).

    La idea es que antes de redirigir, debo revisar si existe o no el usuario logado. Si no existe redirijo al Login y si existe me quedo en la página.

    Por otr lado cuando hago Login, debo guardar la información de si está o no antes de redirigir a la página.

7. Para no repetir la comprobación de si estoy logado no en TODAS las páginas privadas, vamos a construir un componente `PrivateRoute`.
    Este componente lo que va a hacer es declarar una routa del router, que pintara la página privada si está logado, y sino realizará la redirección.

    Para ello necesitamos conocer una prop que existe en TODOS los componentes de react, que se llama `children`, que representa el DOM hijo de mi componente react

```jsx
    <MiComponente>
        <Other></Other> {/* esto es lo que se conoce como Children (DOM hijo de mi componente cuando es utilizado). Dentro de MiComponente podemos acceder a el (props.children)*/}
    </MiComponente>
```

```jsx
<Routes>
    <Route path="/public/path" element={<PublicPage />}></Route> {/*Esto sería una ruta pública*/}

    {/*Pongo como children el componente de página privado dentro de un componente Privado*/}
    <Route path='/private/path' element={
        <PrivateRoute>
            <PrivatePageComponent /> {/*Esto será la prop children del componente PrivateRoute*/}
        </PrivateRoute>
    }></Route>
    <Route path='/other/private/path' element={
        <PrivateRoute>
            <OtherPrivatePage />
        </PrivateRoute>
    }></Route>
</Routes>

```

¿Como es el componente PrivateRoute?

```jsx
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


```
