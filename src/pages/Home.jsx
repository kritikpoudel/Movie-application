import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopulatMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load MOvies.........");
      } finally {
        setLoading(false);
      }
    };
    loadPopulatMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("failed to search movies......");
    } finally {
      setLoading(false);
    }
    setSearchQuery("");
  };
  return (
    <div className="w-full py-5 box-border">
      <form
        onSubmit={handleSearch}
        className="max-w-[600px] mx-auto mb-8 flex gap-4 box-border"
      >
        <input
          type="text"
          placeholder="Search for movies......."
          className="flex-1 px-4 py-3 rounded bg-gray-300 text-black text-base border-0 focus:outline-none focus:ring-2 focus:ring-gray-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="py-3 px-6 bg-red-500 text-black rounded font-medium transition-colors duration-200 hover:bg-red-600"
          type="submit"
        >
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="Loading">Loading..........</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-6 w-full box-border">
          {movies.map(
            (movie) =>
               (
                <MovieCard movie={movie} key={movie.id} />
              )
          )}
        </div>
      )}
    </div>
  );
}
