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


function SearchEntireComponent(searchQuery){
let movies

const options = { method: "GET", headers: { accept: "application/json" } };
const API = `https://api.themoviedb.org/3/search/multi?query=${searchQuery}&api_key=${process.env
.REACT_APP_API_KEY}`;

return fetch(API, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response.results);
    movies = response.results
    return movies;
  }) .catch(error => {
    console.error("Error fetching data:", error);
    throw error;
  })
}



export { ChildComponent1, ChildComponent2, ChildComponent3, SearchEntireComponent };

