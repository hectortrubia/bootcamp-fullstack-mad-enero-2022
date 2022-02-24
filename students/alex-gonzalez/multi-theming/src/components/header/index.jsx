import ThemingSelector from '../../shared/theming/theming-selector';
import './style.css';


function Header(){

    return (
        <header className="header__container">
            <h1>My Awsome Themming</h1>
            <ThemingSelector/>
        </header>
    )
}


export default Header;