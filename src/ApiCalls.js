import supabase from './config/supabaseClient.js'

export async function fetchProducts(range) {
    const {data, error} = await supabase
        .from('conditioners')
        .select('*')
        .range(range[0], range[1])

    if (!error) {
        return data
    }
}

export async function getPageNumber(maxProductsOnPage) {
    const { data, error } = await supabase
        .from('conditioners')
        .select('*')

    if (!error) {
        const pages = Math.ceil(data.length / maxProductsOnPage)
        const pageCountArr = []

        for (let i = 1; i <= pages; i++) {
            pageCountArr.push(i)
        }
        return pageCountArr
    }
}

