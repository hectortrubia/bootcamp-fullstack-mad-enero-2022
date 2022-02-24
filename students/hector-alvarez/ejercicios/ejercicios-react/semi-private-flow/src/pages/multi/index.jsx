import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Multi() {

const [searchParams] = useSearchParams();

const op1 = searchParams.get('op1')
const op2 = searchParams.get('op2')



return (
<div>
    <p>solucion{op1 * op2}</p>

    <Link to='/confirmacion'><button >enviar</button></Link>
    </div>

        )

    }
      

export default Multi