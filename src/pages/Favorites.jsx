
import { useMovieContext } from "../context/MovieContext"
import MovieCard from "../components/MovieCard"

export default function Favorites() {
  const {favorites}=useMovieContext();
  if (favorites && favorites.length > 0){
    return(
      <div className="favorites">
        <h1>Your Favorites Movies</h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-6 w-full box-border">
              {favorites.map(
                (movie) =>
                   (
                    <MovieCard movie={movie} key={movie.id} />
                  )
              )}
            </div>
            </div>
    )
  }
 return (
    <div className="text-center py-16 px-8 bg-black/5 rounded-xl my-8 max-w-xl mx-auto">
        <h2 className="mb-4 text-3xl text-red-600">No favorite movies yet</h2>
        <p className="text-gray-400 text-lg leading-relaxed">Start adding movies to your favorites and they will appear here</p>
        </div>
  )
}
