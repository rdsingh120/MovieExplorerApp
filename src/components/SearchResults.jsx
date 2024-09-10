import SearchResult from './SearchResult'
var i = 0

const SearchResults = ({ searchResults }) => {
  return (
    <div className="results">
      {searchResults.map((movie) => (
        <SearchResult key={i++} {...movie} />
      ))}
    </div>
  )
}
export default SearchResults
