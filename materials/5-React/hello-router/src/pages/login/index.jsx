import React from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const loginSubmit = e => {
        e.preventDefault();
        // punto 2, 3
        // punto 4 (solo cuando el backend ha devuelto un 200)
        localStorage.setItem('user', e.target.user.value); // guardo el user en el localStorage
        navigate('/private/home'); // redirijo a la página privada
    }

    return (
        <React.Fragment>
            <h1>Login</h1>
            <form onSubmit={loginSubmit}>
                <div>
                    <label htmlFor="user">User</label>
                    <input id="user" name="user" placeholder="Introduzca su usuario"></input>
                </div>
                <div>
                    <label htmlFor="pass">password</label>
                    <input id="pass" name="pass" type='password' placeholder="Introduzca su password"></input>
                </div>
                <button type="submit">Sign in</button>
            </form>
        </React.Fragment>
    )
}

export default Login;