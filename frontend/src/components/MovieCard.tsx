import type { MovieCardProps } from "../models/MovieCardProps";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard(movie: MovieCardProps) {
  const { title, url, releaseDate } = movie;
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <div className="col p-2">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={url} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{releaseDate}</p>
          <button
            className={`btn btn-${favorite ? "danger" : "secondary"}`}
            onClick={onFavoriteClick}
          >
            ♡
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
