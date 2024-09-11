import Skeleton from "./Skeleton"

const Skeletons = () => {
  return (
    <div className=" skeleton results-container">
      <h1 className="search"></h1>
      <div className="results">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  )
}
export default Skeletons