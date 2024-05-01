import React from "react";
import "./MovieCard.css";

function MovieCard({ movie }) {
  const { title, poster_path, overview } = movie;
  const posterUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
