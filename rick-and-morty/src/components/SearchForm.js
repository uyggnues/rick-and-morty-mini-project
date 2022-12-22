import React from "react"

const SearchForm = ({queryChar, setQueryChar}) => {

    const handleChange = (e) => {
    // debugger
    setQueryChar(e.target.value)
    }

    return (
        <div className='search'>
            <input 
            className="search-input" 
            type="text" 
            placeholder='Search for ...'
            onChange={handleChange} 
            value={queryChar} 
            />
        </div>
    )
 }

 export default SearchForm;