import React, { useEffect, useState, Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HeaderDetails from "../../Components/Navigation/Header/HeaderDetails";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function Details() {
  const [movie, setmovie] = useState({});
  const [omdbMovie, setOmdbMovie] = useState({});
  let history = useNavigate();
  let { id } = useParams();

  const getOMDB = (imdb_id) => {
 // Linking omdbapi to the movie database
 const options = { method: "GET", headers: { accept: "application/json" } };
 const omdbapi = `http://www.omdbapi.com/?i=${imdb_id}&plot=full&apikey=${process.env.REACT_APP_API_KEY_OMDB}`;
 console.log(omdbapi)
 fetch(omdbapi, options)
   .then((omdbResponse) => omdbResponse.json())
   .then((omdbResponse) => {
     console.log("omdbResponse");
     console.log(omdbResponse);
    return  setOmdbMovie(omdbResponse);
   }).catch((err) => console.error(err));
  }

  const getOMDBName = (imdb_name) => {
 // Linking omdbapi to the movie database
 const options = { method: "GET", headers: { accept: "application/json" } };
 const omdbapi = `http://www.omdbapi.com/?t=${imdb_name}&plot=full&apikey=${process.env.REACT_APP_API_KEY_OMDB}`;
 console.log(omdbapi)
 fetch(omdbapi, options)
   .then((omdbResponse) => omdbResponse.json())
   .then((omdbResponse) => {
     console.log("omdbResponseName");
     console.log(omdbResponse);
    return  setOmdbMovie(omdbResponse);
   }).catch((err) => console.error(err));
  }

  useEffect(() => {
    const options = { method: "GET", headers: { accept: "application/json" } };
    const API = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`;
    console.log(API);
    fetch(API, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setmovie(response);
        // getOMDBName(response.original_title);
        getOMDB(response.imdb_id);

       
      }).catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <HeaderDetails {...movie} />
      <MDBContainer className="mt-3">
        <MDBRow>
          <MDBCol>
            <h3>Movie Overview</h3>
            {movie.overview}
            <MDBRow className="mt-5">
              <MDBCol>
                <p>
                  <strong>Actress</strong>
                </p>

                <ul className="p-0" style={{ listStyleType: "none" }}>
                  {omdbMovie.Actors &&
                    omdbMovie.Actors.split(", ").map((actor, index) => { return <li key={index}>{actor}</li>})}
                </ul>
              </MDBCol>
              <MDBCol>
                <p>
                  <strong>Director</strong>
                </p>
                <ul style={{ listStyleType: "none" }} className="p-0">
                  <li>{omdbMovie.Director}</li>
                </ul>
              </MDBCol>
              <MDBCol>
                <p className="font-weight-bold">
                  <strong>Generes</strong>{" "}
                </p>
                <ul className="p-0" style={{ listStyleType: "none" }}>
                  {movie.genres &&
                    movie.genres.map((genre, index) => {
                      return <li key={index}>{genre.name}</li>;
                    })}
                </ul>
              </MDBCol>
            </MDBRow>
            <h3 className="mt-5">Movie Plot</h3>
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
      </MDBContainer>
      {id}

      <p>
        <button onClick={() => history(-1)}>Go Back</button>
      </p>
    </div>
  );
}
