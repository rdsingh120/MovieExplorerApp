import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import SearchResults from './components/SearchResults'
var i = 0

function App() {
  const key = import.meta.env.VITE_API_KEY
  const [inputValue, setInputValue] = useState('')
  const [keyword, setKeyword] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const fetchMovie = async () => {
    if (keyword) {
      setLoading(true)
      const response = await fetch(
        `https://www.omdbapi.com/?s=${keyword}&apikey=${key}&page=1`
      )
      const data = await response.json()
      if (data.Response == 'False') {
        setError(true)
        setLoading(false)
        setSearchResults([])
        return
      }
      setSearchResults(data?.Search)
      setError(false)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchMovie()
  }, [keyword])

  return (
    <>
      <Navbar
        onSubmit={(e) => {
          e.preventDefault()
          setKeyword(inputValue)
          setInputValue('')
        }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {error ? (
        <h1 className="enterMovie">
          Sorry we couldn't find what you're looking for. Try something else...
        </h1>
      ) : loading ? (
        <Loader />
      ) : (
        <SearchResults searchResults={searchResults} />
      )}
    </>
  )
}

export default App
