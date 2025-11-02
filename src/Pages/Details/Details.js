import React, { useEffect, useState, Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HeaderDetails from "../../Components/Navigation/Header/HeaderDetails";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import SimularListing from "../../Pages/Listing/SimularListing";
import noPosterAvailable from "../../Components/Image/noposter.jpeg";
// import { DisplaySmall } from "../../Components/Displays/Display";

import { Link } from "react-router-dom";
export default function Details() {
  const [movie, setmovie] = useState({});
  const [omdbMovie, setOmdbMovie] = useState({});
  const [similarMovies, setSimilarMovies] = useState([{}]);
  const [defaultMovies, setDefaultMovies] = useState([]);
  const [moviePoster, setMoviePoster] = useState(noPosterAvailable);
  let history = useNavigate();
  let { id } = useParams();


  const firstLoad = () => {
    window.scrollTo(0, 0);
    const options = { method: "GET", headers: { accept: "application/json" } };
    const API = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`;
    fetch(API, options)
      .then((response) => response.json())
      .then((response) => {
        setmovie(response);
        if (response.poster_path !== null) {
          setMoviePoster(`https://image.tmdb.org/t/p/original${response.poster_path}`);
        } 
        getOMDB(response.imdb_id);
        // Pass the response directly to ensure genres are available
        getOMDBSimilarWithMovie(id, response);
      }).catch((err) => console.error(err));
  }


  const getOMDB = (imdb_id) => {
 // Linking omdbapi to the movie database
 const options = { method: "GET", headers: { accept: "application/json" } };
 const omdbapi = `https://www.omdbapi.com/?i=${imdb_id}&plot=full&apikey=${process.env.REACT_APP_API_KEY_OMDB}`;
 console.log(omdbapi)
 fetch(omdbapi, options)
   .then((omdbResponse) => omdbResponse.json())
   .then((omdbResponse) => {
    return  setOmdbMovie(omdbResponse);
   }).catch((err) => console.error(err));
  }

  // Create a new function that has access to the movie data
  const getOMDBSimilarWithMovie = (movie_id, movieData) => {
    const options = { method: "GET", headers: { accept: "application/json" } };
    const API = `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${process.env.REACT_APP_API_KEY}`;  
    
    fetch(API, options)
      .then((similarMoviesResponse) => similarMoviesResponse.json())
      .then((similarMoviesResponse) => {
        if (similarMoviesResponse.results && similarMoviesResponse.results.length > 0) {
          setSimilarMovies(similarMoviesResponse.results);
        } else {
          // If no similar movies, get movies from the first genre using movieData
          setSimilarMovies([]);
          getDefaultMoviesByGenreWithData(movieData);
        }
      }).catch((err) => console.error(err));
  }

  const getDefaultMoviesByGenreWithData = (movieData) => {
    if (movieData.genres && movieData.genres.length > 0) {
      const firstGenreId = movieData.genres[0].id;
      const options = { method: "GET", headers: { accept: "application/json" } };
      const API = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${firstGenreId}&page=1`;
      
      fetch(API, options)
        .then((response) => response.json())
        .then((response) => {
          // Filter out the current movie and take first 8
          const filteredMovies = response.results
            .filter(defaultMovie => defaultMovie.id !== parseInt(id))
            .slice(0, 8);
          setDefaultMovies(filteredMovies);
        })
        .catch((err) => console.error(err));
    }
  }

  useEffect(() => {
    firstLoad()
  }, []);

  useEffect(() => {
    firstLoad()
  }, [id]);

if (similarMovies[0]) {
 console.log(similarMovies[0].id)
}

// Determine which movies to display and what title to show
const moviesToDisplay = similarMovies.length > 0 ? similarMovies : defaultMovies;
const sectionTitle = similarMovies.length > 0 ? "Similar" : 
  (movie.genres && movie.genres.length > 0 ? `More ${movie.genres[0].name} Movies` : "Recommended");

return (
  <div>
    <HeaderDetails {...movie} />
    <MDBContainer className="">
      
        <MDBRow className="p-5">
          <MDBCol>
            <h3>Overview</h3>
            {movie.overview}
            <h3 className="mt-5">Details</h3>
<MDBRow className="mb-1 py-0 ">
  <MDBCol><strong>Runtime</strong><ul className="p-0" style={{ listStyleType: "none" }}><li>{movie.runtime} mins</li></ul></MDBCol>
  <MDBCol><strong>Release Date</strong><ul className="p-0" style={{ listStyleType: "none" }}><li>{movie.release_date}</li></ul></MDBCol>
  <MDBCol><strong>Rated</strong><ul className="p-0" style={{ listStyleType: "none" }}><li>{omdbMovie.Rated}</li></ul></MDBCol>
</MDBRow>
            <MDBRow>
              <MDBCol>
                  <strong>Actress</strong>
                <ul className="p-0" style={{ listStyleType: "none" }}>
                  {omdbMovie.Actors &&
                    omdbMovie.Actors.split(", ").map((actor, index) => { return <li key={index}>{actor}</li>})}
                </ul>
              </MDBCol>
              <MDBCol>
                  <strong>Director</strong>
                <ul style={{ listStyleType: "none" }} className="p-0">
                  <li>{omdbMovie.Director}</li>
                </ul>
              </MDBCol>
              <MDBCol>
                  <strong>Generes</strong>{" "}
                <ul className="p-0" style={{ listStyleType: "none" }}>
                  {movie.genres &&
                    movie.genres.map((genre, index) => {
                      return <li key={index}>{genre.name}</li>;
                    })}
                </ul>
              </MDBCol>
            </MDBRow>
            <h3 className="mt-5">Plot</h3>
            {omdbMovie.Plot &&  <p>{omdbMovie.Plot}</p>}
            
          </MDBCol>
          <MDBCol  md="6" 
  xs="12"  className="d-flex flex-column justify-content-center " style={{ minWidth: "300px" }}>
              <MDBRow >
          <MDBCol className="d-flex w-100 justify-content-end align-items-end p-5">
              <p>
       <button
  className="btn btn-outline-light btn-lg"
  onClick={() => {
    history(-1);
    setTimeout(() => window.scrollTo(0, 0), 20);
  }}
>
  Go Back
</button>
      </p>
          </MDBCol>
        </MDBRow>   
      <img
              className="w-100"
              src={moviePoster}
              alt={movie.title}
              style={{ minWidth: "220px", maxWidth: "500px", width: "100%", height: "auto", objectFit: "cover" }}
            />
          </MDBCol>
        </MDBRow>
     
        <MDBRow className="fullblackBackground text-center">
          <h1>{sectionTitle}</h1>
          <MDBRow>
            {moviesToDisplay.map((movieItem, index) => {
              return <SimularListing simularMovie={movieItem} key={movieItem.id || index} index={index} />
            })}
          </MDBRow>
        </MDBRow>
      </MDBContainer>
      {/* {id} */}

 
    </div>
  );
}
