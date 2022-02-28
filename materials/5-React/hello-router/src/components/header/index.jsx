import './style.css'
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const navigateToOperar = e => {
        e.preventDefault();
        navigate(`/operar?op1=${e.target.op1.value}&op2=50`);
    }

    return (
        <header>
            <nav>
                <Link className='hola' to='/hello'>Go to hello</Link>
                <Link className='hola' to='/countries'>Search Countries</Link>
                <Link className='hola' to='/contact'>Contactanos</Link>
                <Link className='hola' to='/login'>Sign In</Link>
                <Link className='hola' to='/operar?op1=30&op2=20'>Operar(30+20)</Link>
                <form onSubmit={navigateToOperar}>
                    <input name='op1' type='number'></input>
                    <button type='submit'>Navegación JS a Operar</button>
                </form>
            </nav>
        </header>
    )
}


export default Header;