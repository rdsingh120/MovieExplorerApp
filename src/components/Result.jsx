import img from '../assets/poster.jpg'
import { Link } from 'react-router-dom'

const Result = ({ result }) => {
  return (
    <Link to={`/${result?.imdbID}`}>
      <div
        onClick={() => console.log(result?.Title)}
        className="overflow-hidden rounded-lg cursor-pointer hover:scale-95 duration-200"
      >
        <img
          className="w-[200px] h-[300px] object-cover text-white"
          src={result?.Poster == 'N/A' ? img : result?.Poster}
          alt={result.Title}
        />
      </div>
    </Link>
  )
}
export default Result
