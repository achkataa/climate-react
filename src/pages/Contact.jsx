import '../styles/Contact.css'
import {Link} from "react-router-dom";

export default function Contact() {
    return (
        <>
        <main>
        <section className="contact-section">
            <div className="mail">
                <h1>Свържете се с нас!</h1>
            </div>

            <div className="wrapper">
                <div className="call-us">
                    <i className="fa-solid fa-phone fa-2x phone"></i>
                    <p>Обадете ни се!</p>
                    <p>0898401192 / 0899852223</p>
                </div>
    
                <div className="email-us">
                    <i className="fa-solid fa-envelope fa-2x mail"></i>
                    <p>Пишете ни!</p>
                    <p>climafixbg@gmail.com</p>
                </div>
    
                <div className="follow us">
                    <a href="https://www.facebook.com/groups/4053679978089615"></a>
                    <p>Последвайте ни!</p>
                    <p>ClimaFix</p>
    
                </div>
            </div>
        </section>
    </main>

    <div className="back-btn">
        <Link to={`/`}>Обратно към каталога</Link>
    </div>
    </>
    )
}