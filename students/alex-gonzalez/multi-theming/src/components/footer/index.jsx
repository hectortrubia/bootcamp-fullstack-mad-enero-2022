import './style.css';
import ThemingSelector from '../../shared/theming/theming-selector';

function Footer(){

    return (
        <footer className='footer__container'>
            <p>This is my Footer</p>
            <ThemingSelector/>
        </footer>
    )
}


export default Footer;