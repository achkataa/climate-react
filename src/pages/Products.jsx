import '../styles/reset.css'
import '../styles/Products.css'
import '../styles/variables.css'
import '../styles/productPages.css'
import supabase from '../config/supabaseClient.js'
import {useEffect, useState} from 'react'
import ProductSingleton from "../components/ProductSingleton.jsx";
import {Pagination} from '../components/Pagination.jsx'
import {useSearchParams} from "react-router-dom";

function Products() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [conditioners, setConditioners] = useState([])
    let initialState = [0, 9]

    const param = searchParams.get('page');

    if (param) {
        initialState = [(param * 10) - 10, (param * 10) - 1]
    }

    const [page, setPage] = useState(initialState)

    useEffect(() => {
        async function fetchProducts() {
            const {data, error} = await supabase
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
                                                                                         product={product}/>) :
                    <p>Loading...</p>}
            </section>

            <Pagination setPage={setPage} searchParam={param} setSearchParams={setSearchParams}/>
        </>
    )
}

export default Products