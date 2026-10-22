import Search from '../Search/Search.jsx'
import './Header.css'

export default function Header({input, setInput}){
    return (
        <div className='header'>
            <h1><span>Be</span>tflix</h1>
            <div className="form">
                <Search input={input} setInput={setInput}/>
            </div>
        </div>
    )
}