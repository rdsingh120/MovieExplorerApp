import SearchResult from './SearchResult'
var i = 0

const SearchResults = ({ searchResults, input }) => {
  return (
    <div className='results-container'>
      <h1 className="">
        {searchResults.length > 0 ? `Search results for "${input}"` : ''}
      </h1>
      <div className="results">
        {searchResults.map((movie) => (
          <SearchResult key={i++} {...movie} />
        ))}
      </div>
    </div>
  )
}
export default SearchResults
