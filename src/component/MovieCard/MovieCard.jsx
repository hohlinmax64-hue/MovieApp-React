import MovieModal from "../MovieModal/MovieModal.jsx"
import './MovieCard.css'

export default function MovieCard({
    modal ,
    modalIsOpen, 
    modalIsClose,
    selectedFilm,
    setSelecteFilm,
    filmList, 
    searchFilms}){
    let resultFilms = searchFilms.length > 0 ? searchFilms : filmList
    return (
        <div className="card-movie">
            {resultFilms.map((item, index) => (
                <div className="card" key={index}>
                    <img className='card-img' src={item.posterUrl} alt="" />
                    <h2 className='card-title'>{item.nameRu || item.nameEn}</h2>
                    <button className="card-btnOpenModal" onClick={() => {modal(), setSelecteFilm(item)}}>подррбнее</button>
                </div>
            ))}
            <MovieModal 
            modal={modalIsOpen} 
            setModal={modalIsClose} 
            result={selectedFilm}/>
        </div>
    )
}