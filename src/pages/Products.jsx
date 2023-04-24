import '../styles/reset.css'
import '../styles/Products.css'
import '../styles/variables.css'
import supabase from '../config/supabaseClient.js'
import {useEffect, useState} from 'react'
import ProductSingleton from "../components/ProductSingleton.jsx";

function Products() {
    const [conditioners, setConditioners] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            const {data, error} = await supabase
                .from('conditioners')
                .select('*')

            if (!error) {
                setConditioners(data)
            }
        }

        fetchProducts()
    }, [])


    return (
        <section className="climate-conditioners">
            {conditioners.length > 0 ? conditioners.map(product =>  <ProductSingleton key={product.id}
                                                                                      product={product}/>) :
                <p>No products found!</p>}
        </section>
    )
}

export default Products