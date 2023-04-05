import './styles/reset.css'
import './styles/Header.css'
import './styles/variables.css'

function Header() {
    return (
        <header className="header">
            <h1 className="header-heading">ClimaFix</h1>
            <img className="header-img" src="./src/images/logo.png" alt="logo"/>
        </header>
    )
}

export default Header