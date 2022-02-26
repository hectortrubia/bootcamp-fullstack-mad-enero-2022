import React from "react";
import { useNavigate,useSearchParams } from "react-router-dom"
function Login () {
  let navigate = useNavigate()
  const [searchParams] = useSearchParams();
  
  const op1 = searchParams.get("op1");

  const op2 = searchParams.get("op2");
  const handler = e => {
  
  localStorage.setItem('email',e.target.email.value)
  navigate(`/multiplier?op1=${op1}&op2=${op2}`)}

  
   
return (
    <React.Fragment>


            <form onSubmit={handler}>

                <label htmlFor="email"></label>
                <input type="email" name="email" id="nombre" placeholder="Introduce tu email" />

                <button type="submit">Enviar</button>

                </form>

        </React.Fragment>


    )

}


export default Login