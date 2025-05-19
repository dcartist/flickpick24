import React, { useEffect, useState, Suspense } from "react";

import { useParams, useNavigate } from "react-router-dom";
import DisplayList from "../../Components/Displays/DisplayList";

export default function CategoriesListing() {
    const [movie, setmovie] = useState({});
    let { id } = useParams();

    const firstLoad = () => {
        const options = { method: "GET", headers: { accept: "application/json" } };
        const API = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${id}`;
        fetch(API, options)
          .then((response) => response.json())
          .then((response) => {
            setmovie(response);
            console.log(response)
          }).catch((err) => console.error(err));
      }
    
  useEffect(() => {
    firstLoad()
  }, []);

  return (
    <div>
        <h1>Categories</h1>
        { movie.results && movie.results.length > 0 ? <DisplayList movies={movie.results} /> : null }
    </div>

  )
}
