import placeholder from '../assets/placeholder.png'
const Skeleton = () => {
  return (
    <article className="skeleton searchResult">
      <div className="img-container">
        <img src={placeholder} alt="" />
      </div>
      <h1
        className="title"
      >
      </h1>
      <div className="details">
        <span className="year"></span>
      </div>
    </article>
  )
}
export default Skeleton