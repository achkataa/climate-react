import '../styles/reset.css'
import '../styles/Products.css'
import '../styles/variables.css'
import '../styles/productPages.css'
import { useState } from 'react'
import ProductSingleton from "../components/ProductSingleton.jsx";
import { Pagination } from '../components/Pagination.jsx'
import { useSearchParams } from "react-router-dom";

function Products() {
    const [conditioners, setConditioners] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();

    let currentPage = 1

    const param = searchParams.get('page');
    if (param) {
        currentPage = param
    }

    return (
        <>
            <section className="climate-conditioners">
                {conditioners.length > 0 ? conditioners.map(product => <ProductSingleton key={product.id}
                    product={product} />) :
                    <p>Loading...</p>}
            </section>

            <Pagination setConditioners={setConditioners} setSearchParams={setSearchParams} currentPage={currentPage} />
        </>
    )
}

export default Products