import Info from './Info'
import img from '../assets/default-movie.jpg'

const Movie = ({
  Title,
  Year,
  Poster,
  Plot,
  Writer,
  Genre,
  Actors,
  Language,
  imdbRating,
  Response
}) => {
  
  if (Title)
    return (
      <div className="movie">
        <h1 className="movieTitle">
          {Title} ({Year})
        </h1>
        <div className="movieInfo">
          <div className="left">
            <img src={Poster == 'N/A' ? img : Poster} alt={Title} />
          </div>
          <div className="right">
            <p className="plot">
              {Plot.length > 650 ? Plot.substring(0, 650) + '...' : Plot}
            </p>
            <Info text="IMDB Rating" details={imdbRating} />
            <Info text="Genre" details={Genre} />
            <Info text="Created By" details={Writer} />
            <Info text="Actors" details={Actors} />
            <Info text="Language" details={Language} />
            
          </div>
        </div>
      </div>
    )
  if (Response == 'False') return <h1 className="enterMovie">Sorry we couldn't find what you're looking for. Try something else...</h1>
  return <h1 className="enterMovie">Enter a movie name to get info...</h1>
}
export default Movie
