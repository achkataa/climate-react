import { useState, useEffect } from "react"
import supabase from '../config/supabaseClient.js'


export function Pagination({ setPage }){
    const [pageNumber, setPageNumber] = useState([1])
    const [activeLi, setActiveLi] = useState(1)
    const maxProductsOnPage = 10

    useEffect(() => {
        async function getpageNumber() {
            const { data, error } = await supabase
                .from('conditioners')
                .select('*')
    
            if (!error) {
                const pages = Math.ceil(data.length / maxProductsOnPage)
                const pageCountArr = []
    
                for (let i = 1; i <= pages; i++) {
                    pageCountArr.push(i)
                }
    
                setPageNumber(pageCountArr)


            }
        }

        getpageNumber()
    }, [])

    function getFromAndTo(currentPage) {
        const from = currentPage > 1 ? (currentPage - 1) * maxProductsOnPage : 0;
        const to = currentPage != 1 ? (currentPage * maxProductsOnPage) - 1 : 9;

        return [from, to]
    }

    function handlePageChange(e) {
        if (e.target.tagName == 'LI') {
            setPage(getFromAndTo(e.target.id))
            setActiveLi(e.target.id)
        }
    }

    return (
        <section className='product-pages'>
                <ul onClick={handlePageChange} role='list' className='page-list'>
                    {pageNumber.map(num => <li id={num} className={num == activeLi ? 'active' : ''} key={num}>{num}</li>)}
                </ul>
        </section>
    )
}