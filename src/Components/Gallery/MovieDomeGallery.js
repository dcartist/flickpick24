import { useEffect, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import './MovieGrid.css';

export default function MovieDomeGallery() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const gridRef = useRef(null);

  // Fetch popular movies
  useEffect(() => {
    const fetchPopularMovies = () => {
      const options = { method: "GET", headers: { accept: "application/json" } };
      const API = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=1`;
      
      fetch(API, options)
        .then((response) => response.json())
        .then((response) => {
          // Get 20 movies with poster images
          const movieItems = response.results
            ?.filter(movie => movie.poster_path) // Only movies with posters
            ?.slice(0, 20) || [];
          setMovies(movieItems);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    };

    fetchPopularMovies();
  }, []);

  const handleMovieClick = (movieId) => {
    navigate(`/listing/${movieId}`);
    window.scrollTo(0, 0);
  };

  // Define grid sizes for asymmetrical layout
  const getGridItemClass = (index) => {
    const patterns = [
      'grid-item large', // 0
      'grid-item medium', // 1
      'grid-item small', // 2
      'grid-item small', // 3
      'grid-item medium', // 4
      'grid-item large', // 5
      'grid-item small', // 6
      'grid-item medium', // 7
      'grid-item small', // 8
      'grid-item small', // 9
      'grid-item large', // 10
      'grid-item medium', // 11
      'grid-item small', // 12
      'grid-item medium', // 13
      'grid-item small', // 14
      'grid-item large', // 15
      'grid-item small', // 16
      'grid-item medium', // 17
      'grid-item small', // 18
      'grid-item medium' // 19
    ];
    return patterns[index % patterns.length];
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-text">Loading Movie Gallery...</div>
      </div>
    );
  }

  return (
    <div className="movie-grid-container">
      <div className="fade-overlay fade-top"></div>
      <div className="fade-overlay fade-bottom"></div>
      
      <div ref={gridRef} className="movie-grid">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={getGridItemClass(index)}
            onClick={() => handleMovieClick(movie.id)}
          >
            <div className="movie-item">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
                draggable={false}
              />
              <div className="movie-overlay">
                <div className="movie-info">
                  <h3 className="movie-title">{movie.title}</h3>
                  <p className="movie-year">
                    {movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}
                  </p>
                  <div className="movie-rating">
                    ⭐ {Math.round(movie.vote_average * 10) / 10}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
