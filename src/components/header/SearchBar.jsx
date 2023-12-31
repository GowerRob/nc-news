import './header.css'
const SearchBar= ({setSearch, handleSearch}) => {


  return (
  <>
    <input type="email" 
    placeholder='Enter a search term'
    onChange={e=>setSearch(e.target.value)}
    // value={search}
    ></input>
    <button type="button"
    onClick={handleSearch}
    >Search</button>
  </>
  )
}

export default SearchBar