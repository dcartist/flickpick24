import React, { useEffect, useState } from 'react';

const ChildComponent1 = () => {
  return <p>Child Component 1</p>;
};

const ChildComponent2 = () => {
  return <p>Child Component 2</p>;
};

const ChildComponent3 = () => {
  return <p>Child Component 3</p>;
};


// const 
function SearchEntireComponent(searchQuery){

// Grab data multiple search from api using the search query
// return the data from the component as an array
// const [movies, setMovies] = useState(null);
// const [finalResult, setFinalResult] = useState(null);
let movies

const options = { method: "GET", headers: { accept: "application/json" } };
const API = `https://api.themoviedb.org/3/search/multi?query=${searchQuery}&api_key=${process.env
.REACT_APP_API_KEY}`;

fetch(API, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response.results);
    // setMovies(response.results);
    // setFinalResult(response.results);
    // console.log(movies);
    // console.log("movies");
    movies = response.results
    // return movies
  }).catch((err) => console.error(err));
// console.log(movies)
// console.log("movies")
// return movies;
}



//   let finalResult = [];
//   // const [finalResult, setFinalResult] = useState(null);
//   const options = { method: "GET", headers: { accept: "application/json" } };
//   const API = `https://api.themoviedb.org/3/search/multi?query=${searchQuery}&api_key=${process.env.REACT_APP_API_KEY}`;
//   // const API = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;

//   fetch(API, options)
//     .then((response) => response.json())
//     .then((response) => {
//       // console.log(response.results);
//       // setMovies(response.results);
//       // setFinalResult(response.results);
//       // console.log(movies);
//       // console.log("movies");
//       finalResult.push(...response.results) ;
//       return finalResult;
//     }).catch((err) => console.error(err));
//     console.log(finalResult)
// return finalResult;
// }

export { ChildComponent1, ChildComponent2, ChildComponent3, SearchEntireComponent };

