import './styles/reset.css'
import './styles/Products.css'
import './styles/variables.css'
import Rating from './Rating'
import supabase from './config/supabaseClient'
import { useEffect, useState } from 'react'



function Products() {
    const [conditioners, setConditioners] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            const {data, error} = await supabase
                .from('conditioners')
                .select('*')
    
                if (data) {
                    setConditioners(data)
                }
        }

        fetchProducts()
    }, [])



    return (
        <section className="climate-conditioners">
            {conditioners ? conditioners.map(product => (
                <article key={product.id} className="climate climat1">
                    <div className="img-container">
                        <img src={`./src/images/klimatik-${product.id}/${product.img}`} alt="снимка" />
                    </div>

                    <Rating />

                    <div className="info">
                        <p className="model">{product.model}</p>
                        <p className="price">{product.price},00 лв.</p>
                        {/* 2 604,00 лв. */}
                    </div>
                    <div className="btn-wrapper">
                        <a className="btn" id={product.id} href="climat1.html">РАЗГЛЕДАЙ</a>
                    </div>
                </article>
            )) : <p>No products yet</p>}
            
        </section>
    )
}

export default Products