import React, { useEffect, useState, Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HeaderDetails from "../../Components/Navigation/Header/HeaderDetails";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import SimularListing from "../../Pages/Listing/SimularListing";
// import { DisplaySmall } from "../../Components/Displays/Display";

import { Link } from "react-router-dom";
export default function Details() {
  const [movie, setmovie] = useState({});
  const [omdbMovie, setOmdbMovie] = useState({});
  const [similarMovies, setSimilarMovies] = useState([{}]);
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
        getOMDB(response.imdb_id);
        getOMDBSimilar(id);
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

const getOMDBSimilar = (movie_id) => {
 const options = { method: "GET", headers: { accept: "application/json" } };
const API = `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${process.env.REACT_APP_API_KEY}`;  
 console.log(API)
 fetch(API, options)
   .then((similarMoviesResponse) => similarMoviesResponse.json())
   .then((similarMoviesResponse) => {
    return  setSimilarMovies(similarMoviesResponse.results);
   }).catch((err) => console.error(err));
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
  return (
    <div>
      <HeaderDetails {...movie} />
      <MDBContainer fluid>
        <MDBRow className="blackBackground p-5">
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
          <MDBCol className="d-flex justify-content-center">
            <img
              className="w-50 h-auto"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
            />
          </MDBCol>
        </MDBRow>
     
        <MDBRow className="fullblackBackground text-center">
        {/* {similarMovies && similarMovies.map((movie, index) => {
           return <p>{movie.id} and {index}</p>
          })} */}
          <h1>Simular</h1>
          more info
         
          <MDBRow>
          {/* {similarMovies && similarMovies.map((movie, index) => {
           <p>{movie.id} and {index}</p>
          })} */}
          {similarMovies.map((movie, index) => {
            return<SimularListing simularMovie={movie} index={index} />
            // <SimularListing {...movie} index={index}></SimularListing>
          })}
          </MDBRow>
        </MDBRow>
      </MDBContainer>
      {id}

      <p>
        <button onClick={() => history(-1)}>Go Back</button>
      </p>
    </div>
  );
}
