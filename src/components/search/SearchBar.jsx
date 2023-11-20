import { useEffect,useState } from 'react'
// import './header.css'

const SearchBar= ({setNewSearch, handleSearch}) => {
    

useEffect(()=>{

})

  return (
  <>
    <input type="email" 
    placeholder='Enter a search term'
    onChange={e=>{setNewSearch(e.target.value)}}
    ></input>
    <button type="button"
    onClick={handleSearch}
    >Search</button>
  </>
  )
}

export default SearchBar