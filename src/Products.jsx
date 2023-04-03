import './styles/reset.css'
import './styles/Products.css'

export default function Products({ products }) {
    return (
        <section className="climate-conditioners">
            {products.map(product => (
                <article key={product.id} className="climate climat1">
                    <div className="img-container">
                        <img src={product.image} alt="снимка" />
                    </div>

                    <div className="stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>

                    <div className="info">
                        <p className="model">{product.model}</p>
                        <p className="price">{product.price} лв.</p>
                    </div>
                    <div className="btn-wrapper">
                        <a className="btn" id={product.id} href="climat1.html">РАЗГЛЕДАЙ</a>
                    </div>
                </article>
            ))}
        </section>
    )
}
