import axios from 'axios'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './Pages/HomePage'
import toast, { Toaster } from 'react-hot-toast'
import MovieDetails from './Pages/MovieDetails'
import Footer from './components/Footer'

const App = () => {
  const [input, setInput] = useState('')
  const [keyword, setKeyword] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const key = import.meta.env.VITE_API_KEY
  const fetchData = async () => {
    if (!input) {
      toast.error('Please enter somethings.')
      return
    }
    try {
      setLoading(true)
      const { data } = await axios.get(
        `https://www.omdbapi.com/?s=${input}&apikey=${key}`
      )
      setKeyword(input)
      setInput('')
      if (data.Response === 'False') {
        setError(true)
        setLoading(false)
        return
      }
      setResults(data.Search)
      setLoading(false)
      setError(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
      setError(true)
    }
  }
  return (
    <div className="">
      <Navbar input={input} setInput={setInput} fetchData={fetchData} />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              results={results}
              keyword={keyword}
              loading={loading}
              error={error}
            />
          }
        />
        <Route path="/:id" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App
