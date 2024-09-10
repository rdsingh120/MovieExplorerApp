import SearchResult from './SearchResult'
var i = 0

const SearchResults = ({ searchResults, input }) => {
  return (
    <>
      <h1 className="" style={{ fontSize: '2rem', margin: '3rem 23rem' }}>
        {searchResults.length > 0 ? `Search results for "${input}"` : ''}
      </h1>
      <div className="results">
        {searchResults.map((movie) => (
          <SearchResult key={i++} {...movie} />
        ))}
      </div>
    </>
  )
}
export default SearchResults
