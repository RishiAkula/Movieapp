import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './MoviePosters.css';

const MoviePoster = ({ movie }) => {
  const { posterUrl, title, rating } = movie;

  // Function to format rating as percentage (out of 100)
  const formattedRating = Math.round((rating / 10) * 100);

  return (
    <div className="movie-poster">
      <img src={posterUrl} alt={title} />
      <p className="movie-title">{title}</p>
      <div className="rating">
        <ProgressBar now={formattedRating} label={`${rating}/10`} className="progress-bar" />
      </div>
      <p className="rating-label">User Rating</p>
    </div>
  );
};

export default MoviePoster;
