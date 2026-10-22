import Loader from '../Loader/Loader.jsx'
import MovieCard from '../MovieCard/MovieCard.jsx'
import Pagination from '../Pagination/Pagination.jsx';
import './MovieList.css'

export default function MovieList({
    valueModal, 
    modalOpen,
    modalClose,
    selectedFilm,
    setSelecteFilm, 
    setPage,
    searchFilms,
    totalPageFilms,
    currentPageFilms,
    totalPageSearch,
    currentPageSearch,
    page}){
    const isSearching = searchFilms.length > 0;
    return (
        <div className='cards'>
            <div className='block'>
                <MovieCard 
                    filmList={currentPageFilms} 
                    searchFilms={currentPageSearch} 
                    modal={modalOpen}
                    modalIsOpen={valueModal}
                    modalIsClose={modalClose}
                    selectedFilm={selectedFilm}
                    setSelecteFilm={setSelecteFilm}
                    page={page}/>
            </div>

            <div>
                <Pagination 
                    page={page}
                    setPage={setPage} 
                    totalPageFilms={totalPageFilms}
                    totalPageSearch={totalPageSearch}
                    isSearching={isSearching}/>
            </div>
        </div>
    )
}