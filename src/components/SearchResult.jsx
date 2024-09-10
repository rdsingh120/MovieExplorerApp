import img from '../assets/default-movie.jpg'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const SearchResult = ({ Title, Poster, Year, Type }) => {
  return (
    <article className="searchResult">
      <div className="img-container">
        <img src={Poster == 'N/A' ? img : Poster} alt={Title} />
      </div>
      <h1
        className="title"
        data-tooltip-id="my-tooltip"
        data-tooltip-content={Title}
        data-tooltip-place="bottom"
      >
        {Title.length < 30 ? Title : Title.substring(0, 20) + '...'}
      </h1>
      <div className="details">
        <span className="year">{Year}</span>
        <span className="type">{Type}</span>
      </div>
      <Tooltip id="my-tooltip" />
    </article>
  )
}
export default SearchResult
