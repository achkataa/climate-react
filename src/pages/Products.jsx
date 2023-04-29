import '../styles/reset.css'
import '../styles/Products.css'
import '../styles/variables.css'
import '../styles/productPages.css'
import supabase from '../config/supabaseClient.js'
import { useEffect, useState } from 'react'
import ProductSingleton from "../components/ProductSingleton.jsx";
import { Pagination } from '../components/Pagination.jsx'

function Products() {
    const [conditioners, setConditioners] = useState([])
    const [page, setPage] = useState([0, 9])

    useEffect(() => {
        async function fetchProducts() {
            console.log()
            const { data, error } = await supabase
                .from('conditioners')
                .select('*')
                .range(page[0], page[1])

            if (!error) {
                setConditioners(data)
            }
        }

        fetchProducts()
    }, [page])

    return (
        <>
            <section className="climate-conditioners">
                {conditioners.length > 0 ? conditioners.map(product => <ProductSingleton key={product.id}
                    product={product} />) :
                    <p>Loading...</p>}
            </section>

            <Pagination setPage={setPage}/>
        </>


    )
}

export default Products