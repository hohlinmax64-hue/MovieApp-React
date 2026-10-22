import { useEffect, useState } from "react"
import MovieList from './component/MovieList/MovieList.jsx'
import Header from './component/Header/Header.jsx'
import Loader from './component/Loader/Loader.jsx'
import './index.css'

export default function App(){
  const [input, setInput] = useState('')
  const [films, setFilms] = useState([])
  const [searchFilms, setSearchFilms] = useState([])
  const [selectedFilm, setSelectedFilm] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [modal, setModal] = useState(false)
  const [page, setPage] = useState(1)

  let perPage = 4
  let totalPageFilms = Math.ceil(films.length / perPage)
  let firstPage = (page - 1) * perPage
  let lastPage = page * perPage
  let currentPageFilms = films.slice(firstPage, lastPage)
  
  let totalPageSearch = Math.ceil(searchFilms.length / perPage)
  let currentPageSearch = searchFilms.slice(firstPage, lastPage)

  function openModal(){
    setModal(true)
    console.log(modal)
  }

  function closeModal(){
    setModal(false)
    console.log(modal)
  }

  useEffect(() => {
    //function query
    async function film() {
      //error handling
      try {
        
        let response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=1', {
          method: 'GET',
          headers: {
            'X-API-KEY': '4c4f2f7b-c8d8-4922-9d79-63c3c39bfe31',
            'Content-Type': 'application/json',
          },
        }) 
        if(!response.ok){
          throw new Error("Problem with API")
        }
        let date = await response.json()
        setFilms(date.items)

      } catch(e){
        console.log(e)
      }
    }
    //function debounce
    let timer = setTimeout(() => {
      film()
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    setLoading(true)
    async function filmSearch(inputUser) {
      //error handling
      try {
        let response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${inputUser}&page=1`,{
          method: 'GET',
          headers: {
            'X-API-KEY': '4c4f2f7b-c8d8-4922-9d79-63c3c39bfe31',
            'Content-Type': 'application/json',
          },
        }) 
        if(!response.ok){
          throw new Error("Problem with API")
        }
        let date = await response.json()
        setLoading(true)
        setSearchFilms(date.films)

      } catch(e){
        console.log(e)
      } finally {
        setLoading(false)
      }
    }
    let debounce = setTimeout(() => {
      filmSearch(input)
    }, 700)

    return () => {
      clearTimeout(debounce)
    }
  }, [input])

  return (
    <div className="app">
      <Header input={input} setInput={setInput}/>
      {loading && <Loader loading={loading}/>}
      {!loading && <MovieList 
      valueModal={modal} 
      modalOpen={openModal}
      modalClose={closeModal}
      filmList={films} 
      searchFilms={searchFilms}
      selectedFilm={selectedFilm}
      setSelecteFilm={setSelectedFilm}
      setPage={setPage}
      totalPageFilms={totalPageFilms}
      currentPageFilms={currentPageFilms}
      totalPageSearch={totalPageSearch}
      currentPageSearch={currentPageSearch}
      page={page}/>
      }
    </div>
  )
}