import '../styles/reset.css'
import '../styles/Header.css'
import '../styles/variables.css'
import {Link, NavLink} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../App.jsx";

function Header() {
    const authContext = useContext(AuthContext)

    return (
        <header className="header">
            {authContext?.session &&
                <div>
                    <p>Hi, {authContext.session.user.email}</p>
                    <Link to="/logout"  style={{color: "#cc0000"}} >Exit</Link>
                </div>
            }
            <Link to="/">
                <h1 className="header-heading">ClimaFix</h1>
            </Link>
            <Link to="/" className="red">
                <img className="header-img" src="./src/images/logo.png" alt="logo"/>
            </Link>
        </header>
    )
}

export default Header