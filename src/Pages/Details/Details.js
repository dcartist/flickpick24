import React, { useEffect, useState, Suspense }  from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function Details() {
const [movie, setmovie] = useState({})
  let history = useNavigate();
  let { id } = useParams();
// https://api.themoviedb.org/3/movie/1096197?language=en-US

useEffect(() => {
  const options = {method: 'GET', headers: {accept: 'application/json'}};
  const API = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
console.log(API)
  fetch(API, options)
    .then(response => response.json())
    .then(response => {
console.log(response)
setmovie(response)
// 
      // console.log(movie)
      // console.log("movies")
     

    })
    .catch(err => console.error(err));


}, []);

  return (
    <div>Details

    {id}

    <p>
    <button onClick={() => history(-1)}>Go Back</button>
    </p>
    </div>
  )
}
