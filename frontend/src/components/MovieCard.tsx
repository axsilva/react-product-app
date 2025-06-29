import React from "react";
import type { MovieCardProps } from "../models/MovieCardProps";
import "./MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard(movie: MovieCardProps) {
  const { title, url, releaseDate } = movie;
  const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext(); 
  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e: Event) {
    e.preventDefault();
    if(favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
          <img src={url} alt={title} />
          <div className="movie-overlay">
            <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
              ♡
            </button>
          </div>
        </div>
        <div className="movie-info">
          <h3>{title}</h3>
          <p>{releaseDate}</p>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
