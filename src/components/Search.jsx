
const Search = ( {searchTerm, setSearchTerm} ) => {
    
//props should never change by the child component
//and not directly but through react use states and such
//also destructruring the props sent in on the object
// destructure objects { x, y} vs object.x object.y

  return (
    <div className="search" >
      <div>
        <img src="search.svg" alt="search" />
        <input 
          type="text"
          placeholder="search through infinity"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          />
      </div>
    </div>

  )
}

export default Search