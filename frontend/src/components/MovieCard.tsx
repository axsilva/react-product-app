import React from "react";
import type { MovieCardProps } from "../models/MovieCardProps";
import "./MovieCard.css";

function MovieCard(movie: MovieCardProps) {
  const { title, url, releaseDate } = movie;
  function onFavoriteClick() {
    alert("clicked");
  }

  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
          <img src={url} alt={title} />
          <div className="movie-overlay">
            <button className="favorite-btn" onClick={onFavoriteClick}>
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
