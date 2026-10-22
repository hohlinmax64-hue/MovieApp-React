import './Pagination.css'

export default function Pagination({
    page, 
    setPage,
    totalPageSearch,
    totalPageFilms,
    isSearching}){
    return (
        <div className="pagination">
            <button className="pagination-btnPrev" disabled={page === 1} onClick={() => setPage(page - 1)}>
                назад
            </button>
            <span className="page">
                {page} / {isSearching ? totalPageSearch : totalPageFilms}
            </span>
            <button className="pagination-btnNext" disabled={page === totalPageFilms || page === totalPageSearch} 
            onClick={() => setPage(page + 1)}>
                Вперед
            </button>
        </div>
    )
}