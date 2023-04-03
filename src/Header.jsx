import './styles/reset.css'
import './styles/Header.css'
import logo from '../src/images/logo.png';

function Header() {
    return (
        <header className="header">
            <h1 className="header-heading">ClimaFix</h1>
            <img className="header-img" src={logo} alt="logo"/>
        </header>
    )
}

export default Header