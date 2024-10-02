import Results from '../components/Results'
import Loader from '../components/Loader'

const HomePage = ({ results, keyword, loading, error }) => {
  return (
    <div className="flex flex-col items-center min-h-[67vh]">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex justify-center max-w-6xl mx-auto p-2">
          {error ? (
            <span
              className="text-white mt-5 text-3xl max-lg:text-2xl max-md:text-xl 
          max-sm:text-lg text-center"
            >
              Sorry we couldn't find "{keyword}". Try something else...
            </span>
          ) : results?.length == 0 ? (
            <span
              className="text-white mt-5 text-3xl max-lg:text-2xl max-md:text-xl 
          max-sm:text-lg text-center"
            >
              Search something to get results...
            </span>
          ) : (
            <Results results={results} keyword={keyword} error={error} />
          )}
        </div>
      )}
    </div>
  )
}
export default HomePage
