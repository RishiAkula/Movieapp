import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [genre, setGenre] = useState("all");

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/trending/movie/day", {
          params: {
            api_key: "e822ff863a27d31828a5905f75f90a2f", // Replace with your actual API key
            sort_by: "popularity.desc",
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
      <header className="header">
        <h1 className="header-title">Movie App</h1>
        <div className="header-buttons">
          <Link to="/">
            <button onClick={() => setGenre("all")}>All</button>
          </Link>
          <Link to="/action">
            <button onClick={() => setGenre("28")}>Action</button>
          </Link>
          <Link to="/drama">
            <button onClick={() => setGenre("18")}>Drama</button>
          </Link>
          <Link to="/comedy">
            <button onClick={() => setGenre("35")}>Comedy</button>
          </Link>
        </div>
      </header>
      <main>
        <h2>Trending Movies</h2>
        <div className="movie-posters-container">
          <div className="movie-posters">
            {movies.map((movie) => (
              <div key={movie.id} className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;