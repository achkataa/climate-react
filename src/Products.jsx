import './styles/reset.css'
import './styles/Products.css'
import './styles/variables.css'
import products from "../db"
import Rating from './Rating'

function Products() {
    return (
        <section className="climate-conditioners">
            {products.map(product => (
                <article key={product.id} className="climate climat1">
                    <div className="img-container">
                        <img src={`./src/images/klimatik-${product.id}/${product.image}`} alt="снимка" />
                    </div>

                    <Rating />

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

export default Products