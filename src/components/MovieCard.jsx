import React, { useContext } from "react";
import { useMovieContext } from "../context/MovieContext";

export default function MovieCard({ movie }) {
    const{isFavorite,addToFavorites,removeFromFavorites}=useMovieContext()
    const favorite=isFavorite(movie.id)
  function onFavoriteClick(e) {
    e.preventDefault();
    if(favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
  }
  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-100 transition-transform duration-200 flex flex-col hover:-translate-y-1 group ">
      <div className="relative aspect-[2/3] w-full">
        <img
          className="h-full w-full object-cover"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 rounded-lg">
          <button className="absolute top-4 right-4 text-white text-xl p-2 bg-black/50 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 "  onClick={onFavoriteClick}>
            🤍
          </button>
        </div>
      </div>
      <div className="p-4 flex-1 flex-col gap-2">
        <h1 className="text-xl m-0">{movie.title}</h1>
        <p className="text-lg text-gray-500">{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}
