import React, { useEffect, useState, Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import DisplayList from "../../Components/Displays/DisplayList";

export default function CategoriesListing() {
    const [movie, setmovie] = useState({});
    const [genreName, setGenreName] = useState("");
    let { id } = useParams();
    const history = useNavigate();

    // Genre mapping to get the name
    const genres = {
        28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy",
        80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family",
        14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music",
        9648: "Mystery", 10749: "Romance", 878: "Science Fiction",
        10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"
    };

    const firstLoad = () => {
        const options = { method: "GET", headers: { accept: "application/json" } };
        const API = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${id}&page=1`;
        fetch(API, options)
          .then((response) => response.json())
          .then((response) => {
            setmovie(response);
            setGenreName(genres[id] || "Category");
            console.log(response)
          }).catch((err) => console.error(err));
      }
    
    useEffect(() => {
        firstLoad()
    }, [id]);

    return (
        <MDBContainer className="py-5">
            <MDBRow className="mb-4">
                <MDBCol className="d-flex justify-content-between align-items-center">
                    <h1 className="text-white">{genreName} Movies</h1>
                    <button
                        className="btn btn-outline-light"
                        onClick={() => {
                            history(-1);
                            setTimeout(() => window.scrollTo(0, 0), 100);
                        }}
                    >
                        Go Back
                    </button>
                </MDBCol>
            </MDBRow>
            
            {movie.results && movie.results.length > 0 ? (
                <DisplayList movies={movie.results} />
            ) : (
                <div className="text-center text-white">
                    <p>No movies found for this category.</p>
                </div>
            )}
        </MDBContainer>
    );
}
