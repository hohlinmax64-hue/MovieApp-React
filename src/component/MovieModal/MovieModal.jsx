import './MovieModal.css'

export default function MovieModal({modal, setModal, result}){
    return (
        <div>
            {modal && <div className="modal-overlay">
                <div className="modal">
                    <div className="modal-header">
                        <div className="modal-post">
                            <img className='modal-img' src={result.posterUrl} alt="" />
                            <div className="modal-text">
                                <h2 className="modal-title">
                                    {result.nameRu || result.nameEn}
                                </h2>
                                <span>{result.ratingKinopoisk || result.ratingImdb}</span>
                                <span>{result.year}</span>
                            </div>
                        </div>
                        <button className="btn-clouseModal" onClick={() => setModal(false)}>
                            X
                        </button>
                    </div>
                    <div className='modal-desc'>{result.description}</div>
                </div>
            </div>}
        </div>
        
    )
}