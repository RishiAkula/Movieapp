// DramaPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import './home.css';

function DramaPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated", {
          params: {
            api_key: "e822ff863a27d31828a5905f75f90a2f", // Replace with your actual API key
            sort_by: "popularity.desc",
            with_genres: "18", // Drama genre
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        setError(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className="home-container">
      <main>
        <h2>Drama Movies</h2>
        <div className="movie-posters-container">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-poster">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default DramaPage;
