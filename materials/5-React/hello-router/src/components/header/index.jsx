import './style.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <Link className='hola' to='/hello'>Go to hello</Link>
                <Link className='hola' to='/countries'>Search Countries</Link>
                <Link className='hola' to='/contact'>Contactanos</Link>
                <Link className='hola' to='/login'>Sign In</Link>
            </nav>
        </header>
    )
}


export default Header;