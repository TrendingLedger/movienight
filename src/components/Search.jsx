
const Search = ( {searchTerm, setSearchTerm} ) => {
    
//props should never change by the child component
//and not directly but through react use states and such
//also destructruring the props sent in on the object

  return (
    <div className="text-white text-3xl">{searchTerm}</div>
  )
}

export default Search