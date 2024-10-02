import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = ({ input, setInput, fetchData }) => {
  const navigate = useNavigate()
  return (
    <div
      className="flex items-center justify-between max-sm:flex-col gap-5 
        max-w-6xl my-5 mx-auto px-2 "
    >
      <div className="flex items-center">
        <Link to="/">
          <img className="w-20 h-20 object-cover" src={logo} alt="logo" />
        </Link>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          navigate('/')
          fetchData()
        }}
        className="flex gap-2"
      >
        <input
          type="search"
          className="py-2 px-7 rounded-lg bg-glass bg-transparent 
          text-white w-full"
          placeholder="enter keywords..."
          name="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-gradient-to-r 
          from-blue-900 to-purple-900 hover:bg-gradient-to-bl 
          focus:ring-2 focus:outline-none focus:ring-cyan-300 
          dark:focus:ring-cyan-500 font-medium rounded-lg text-md 
          px-7 py-2 text-center"
        >
          Search
        </button>
      </form>
    </div>
  )
}
export default Navbar
