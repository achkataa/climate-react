import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/contacts">Contacts</a>
                </li>
            </ul>
        </header>
    )
}