import React, { useState } from "react";
import type { MovieCardProps } from "../models/MovieCardProps";
import MovieCard from "../components/MovieCard";
import "./Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies: MovieCardProps[] = [
    { id: 1, title: "John Wick", releaseDate: "2020" },
    { id: 2, title: "Terminator", releaseDate: "1999" },
    { id: 3, title: "The Matrix", releaseDate: "1998" },
  ];

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(event.target.value)
          }
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (
              <MovieCard {...movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
