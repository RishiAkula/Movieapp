import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "./Search"; // Import the Search component
import './home.css';

function HomePage({ history }) {
  const [movies, setMovies] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Get logged-in user information from session storage
    const user = sessionStorage.getItem("loggedInUser");
    if (user) {
      setLoggedInUser(JSON.parse(user));
    }
  }, []);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/trending/movie/day", {
          params: {
            api_key: "e822ff863a27d31828a5905f75f90a2f",
            sort_by: "popularity.desc",
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    // Clear session storage
    sessionStorage.removeItem("loggedInUser");
    // Redirect to login page
    window.location.replace("/");
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1 className="header-title">Movie App</h1>
        <nav className="header-nav">
          <ul>
            <li><Link to="/action">Action</Link></li>
            <li><Link to="/drama">Drama</Link></li>
            <li><Link to="/comedy">Comedy</Link></li>
          </ul>
        </nav>
        <div className="user-info">
          {loggedInUser && (
            <div>
              <span style={{ color: 'white' }}>Welcome, {loggedInUser.name}</span>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </header>
      <main>
        <h2>Search Movies</h2>
        {/* Render the Search component */}
        <Search />
        <h2>Trending Movies</h2>
        <div className="movie-posters-container">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-poster">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default HomePage;
