import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { GoDotFill } from 'react-icons/go'
import { BiLogoImdb } from 'react-icons/bi'
import { SiRottentomatoes } from 'react-icons/si'
import { SiMetacritic } from 'react-icons/si'
import Loader from '../components/Loader'

const MovieDetails = () => {
  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(false)
  const key = import.meta.env.VITE_API_KEY
  const { id } = useParams()
  const fetchMovie = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(
        `https://www.omdbapi.com/?i=${id}&plot=full&apikey=${key}`
      )
      setMovie(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchMovie()
  }, [])

  if (loading)
    return (
      <div className="min-h-[60vh] flex justify-center mt-20">
        <Loader />
      </div>
    )

  return (
    <div className="flex flex-wrap justify-center items-center gap-5 mt-10 m-2 relative min-h-[67vh]">
      <div className="flex justify-center bg-glass rounded-lg py-10 px-5 max-w-[450px] w-full md:sticky md:top-10">
        <img src={movie?.Poster} className="rounded-lg" alt="" />
      </div>
      <div className="flex flex-col items-start max-w-[550px] w-full gap-2 bg-glass  rounded-lg p-5">
        <span className=" bg-sky-500 text-xs px-2 py-.5 rounded-full capitalize">
          {movie?.Type}
        </span>
        <h1 className="text-2xl font-semibold">{movie?.Title}</h1>
        <div className="flex items-center gap-2">
          <span className="">{movie?.Year}</span> <GoDotFill />
          <span>{movie?.Rated}</span> <GoDotFill />
          <span>{movie?.Runtime}</span>
          {movie?.totalSeasons ? (
            <>
              <GoDotFill />
              <span>{movie?.totalSeasons} Seasons</span>
            </>
          ) : null}
        </div>
        <div className="flex items-center gap-2">
          {movie?.Genre?.split(',')?.map((g, i) => {
            return (
              <span key={i} className=" bg-glass px-4 py-1 rounded-full">
                {g}
              </span>
            )
          })}
        </div>
        <p>
          {movie?.Plot?.length > 500
            ? movie?.Plot?.substring(0, 499) + '...'
            : movie?.Plot}
        </p>
        <div className="flex flex-wrap gap-2">
          <span
            className="flex items-center gap-2 bg-glass px-2 
          py-1 rounded-lg"
          >
            <BiLogoImdb size={40} color="#f2c217" />{' '}
            {movie?.Ratings?.[0]?.['Value']}
          </span>
          <span
            className="flex items-center gap-2 bg-glass px-2 
          py-1 rounded-lg"
          >
            <SiRottentomatoes size={30} color="red" />{' '}
            {movie?.Ratings?.[1]?.['Value']}
          </span>
          <span
            className="flex items-center gap-2 bg-glass px-2 
          py-1 rounded-lg"
          >
            <SiMetacritic size={30} color="yellow" />{' '}
            {movie?.Ratings?.[2]?.['Value']}
          </span>
          <div
            className="flex items-center gap-2 bg-glass px-2 
          py-1 rounded-lg"
          >
            <span className="bg-green-600 px-1 font-bold">
              {movie?.Metascore}
            </span>{' '}
            <span className="text-sky-500">Metascore</span>
          </div>
        </div>
        <p>
          Director <span className="mx-1 text-sky-500">{movie?.Director}</span>
        </p>
        <p>
          Writer{' '}
          {movie?.Writer?.split(',').map((w, i) => {
            return (
              <span key={i} className="mx-1 text-sky-500">
                {w}
              </span>
            )
          })}
        </p>
        <p>
          Actors{' '}
          {movie?.Actors?.split(',').map((a, i) => {
            return (
              <span key={i} className="mx-1 text-sky-500">
                {a}
              </span>
            )
          })}{' '}
        </p>

        <p>
          Release date{' '}
          <span className="text-sky-500 mx-1">{movie?.Released}</span>
        </p>
        <p>
          Awards <span className="text-sky-500 mx-1">{movie?.Awards}</span>
        </p>
        <p>
          Country of origin{' '}
          {movie?.Country?.split(',')?.map((c, i) => (
            <span key={i} className="text-sky-500 mx-1">
              {c}
            </span>
          ))}
        </p>
        {movie?.BoxOffice ? (
          <p>
            Box Office{' '}
            <span className="text-sky-500 mx-1">{movie?.BoxOffice}</span>
          </p>
        ) : null}
      </div>
    </div>
  )
}
export default MovieDetails
