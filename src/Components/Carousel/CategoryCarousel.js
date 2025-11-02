import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import DisplaySmallThumbs from "../Displays/DisplaySmallThumbs";
import Rating from "../Rating/Rating";

export default function CategoryCarousel({ genreId, genreName }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryMovies = () => {
      const options = { method: "GET", headers: { accept: "application/json" } };
      const API = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genreId}&page=1`;
      
      fetch(API, options)
        .then((response) => response.json())
        .then((response) => {
          setMovies(response.results?.slice(0, 4) || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    };

    if (genreId) {
      fetchCategoryMovies();
    }
  }, [genreId]);

  if (loading) return <div className="text-white">Loading...</div>;

  return (
    <MDBContainer className="mb-5">
      <MDBRow className="align-items-center mb-3">
        <MDBCol>
          <h3 className="text-white">{genreName}</h3>
        </MDBCol>
        <MDBCol className="text-end">
          <Link 
            to={`/categories/${genreId}`} 
            className="btn btn-outline-light"
            onClick={() => window.scrollTo(0, 0)}
          >
            View More
          </Link>
        </MDBCol>
      </MDBRow>
      
      <MDBRow>
        {movies.map((movie, index) => (
          <MDBCol
            key={movie.id}
            lg="3"
            md="3"
            sm="6"
            xs="12"
            className="mb-3 d-flex justify-content-center flex-column"
          >
            <Link to={`/listing/${movie.id}`} className="text-decoration-none">
              <DisplaySmallThumbs
                starter="onLoad"
                imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="text-white text-center mt-2">
                <p className="mb-1">{movie.title}</p>
                <MDBRow>
                  <MDBCol md="6" className="text-muted">
                    {movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}
                  </MDBCol>
                  <MDBCol md="6">
                    <Rating ratingNumber={Math.round(movie.vote_average)} />
                  </MDBCol>
                </MDBRow>
              </div>
            </Link>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}