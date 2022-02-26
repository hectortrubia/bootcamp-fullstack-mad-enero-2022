import React from "react"
import {useNavigate } from "react-router-dom" 
import usercontext from "../../contexto/datos";
import { useContext } from "react"


function Region() {
    const navigate = useNavigate ()
    const { data, updatedata } = useContext(usercontext)
    const handler = e => {
        e.preventDefault();
        let obj = {
            idioma: e.target.idioma.value,
            country: e.target.country.value,

        }

        updatedata(obj)
        navigate('/userinfo')
        console.log(updatedata)

    }
 


    return (

        <React.Fragment>

            <form onSubmit={handler} name="formulario" method="post" action="">

                <p> ¿en que idioma quiere navegar?</p>
                <div>
                    <input type="radio" id="espanol" name="idioma" value="espanol" />
                    <label htmlFor="espanol">Español</label>
                </div>
                <div>
                    <input type="radio" id="ingles" name="idioma" value="ingles" />
                    <label htmlFor="espanol">Ingles</label>
                </div>
                <div>
                    <input type="radio" id="frances" name="idioma" value="frances" />
                    <label htmlFor="espanol">Frances</label>
                </div>
s
                <p> ¿En que pais quiere navegar?</p>
                <div>
                    <input type="radio" id="espanol" name="country" value="espana" />
                    <label htmlFor="espanol">España</label>
                </div>
                <div>
                    <input type="radio" id="ingles" name="country" value="Reino Unido" />
                    <label htmlFor="espanol">Reino Unido</label>
                </div>
                <div>
                    <input type="radio" id="frances" name="country" value="Francia" />
                    <label htmlFor="espanol">Francia</label>
                </div>

                <button type="submit">Siguiente</button>

            </form>


        </React.Fragment>


    )

}

export default Region