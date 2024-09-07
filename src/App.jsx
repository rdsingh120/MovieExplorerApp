import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Movie from './components/Movie'
import Loader from './components/Loader'

function App() {
  const key = import.meta.env.VITE_API_KEY
  const [inputValue, setInputValue] = useState('')
  const [title, setTitle] = useState('')
  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(false)
  const fetchMovie = async () => {
    if (title) {
      setLoading(true)
      const response = await fetch(
        `https://www.omdbapi.com/?t=${title}&apikey=${key}&plot=full`
      )
      const data = await response.json()
      setMovie(data)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchMovie()
    
  }, [title])

  return (
    <>
      <Navbar
        onSubmit={(e) => {
          e.preventDefault()
          setTitle(inputValue)
          setInputValue('')
        }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {loading ? <Loader /> : <Movie {...movie} />}
    </>
  )
}

export default App
