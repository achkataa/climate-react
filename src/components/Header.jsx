import '../styles/reset.css'
import '../styles/Header.css'
import '../styles/variables.css'
import {Link, NavLink} from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <h1 className="header-heading">ClimaFix</h1>
            </Link>
            <Link to="/">
                <img className="header-img" src="./src/images/logo.png" alt="logo"/>
            </Link>
        </header>
    )
}

export default Header