import './Search.css'

export default function Search({input, setInput}){
    function handleOnChange(e){
        setInput(e.target.value)
    }
    return (
        <div>
            <input type="text" 
            value={input} onChange={handleOnChange}/>
        </div>
    )
}