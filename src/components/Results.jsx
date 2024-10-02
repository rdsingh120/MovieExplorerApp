import Result from './Result'
const Results = ({ results, keyword, error }) => {
  return (
    <div className="flex flex-col items-center gap-10 mt-5">
      <span
        className="text-white text-3xl max-lg:text-2xl max-md:text-xl 
            max-sm:text-lg text-center"
      >
        Search results for "{keyword}"
      </span>
      {!error ? (
        <div className="flex flex-wrap justify-center gap-4">
          {results.map((result) => (
            <Result key={result?.imdbID} result={result} />
          ))}
        </div>
      ) : null}
    </div>
  )
}
export default Results
