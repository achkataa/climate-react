export function getFromAndTo(currentPage, maxProductsOnPage) {
    const from = currentPage > 1 ? (currentPage - 1) * maxProductsOnPage : 0;
    const to = currentPage !== 1 ? (currentPage * maxProductsOnPage) - 1 : 9;

    return [from, to]
}