import { useState, useEffect } from "react"
import { getFromAndTo } from "../utils.js";
import { fetchProducts, getPageNumber } from "../ApiCalls.js";


export function Pagination({ setConditioners, setSearchParams, currentPage }) {
    const maxProductsOnPage = 10

    const [neededPages, setNeededPages] = useState([1])
    const [activePage, setActivePage] = useState(1)

    useEffect(() => {
        changePage(currentPage)
    }, [])

    useEffect(() => {
        getPageNumber(maxProductsOnPage).then(pageArr => setNeededPages(pageArr))
    }, [])

    function changePage(page) {
        const range = getFromAndTo(page, maxProductsOnPage)
        fetchProducts(range).then(products => setConditioners(products))
        setActivePage(page);
        setSearchParams({page: page})
        window.scroll(0, 0)
    }

    function handlePageClick(e) {
        if (e.target instanceof HTMLLIElement) {
            changePage(e.target.id)
        }
    }

    return (
        <section className='product-pages'>
            <ul onClick={handlePageClick} role='list' className='page-list'>
                {neededPages ? neededPages.map(num => <li id={num} className={num == activePage ? 'active' : ''} key={num}>{num}</li>) : <li>1</li>}
            </ul>
        </section>
    )
}