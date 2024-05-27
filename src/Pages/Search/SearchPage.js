import React, { useEffect, useState } from 'react';
import { ChildComponent2, SearchEntireComponent } from "../../API/ApiListing";
export default function SearchPage() {

  const [searchQuery, setSearchQuery] = useState(null);
  const [filteredPeople, setFilterPeople] = useState(null);
  const [filteredMovie, setFilterMovie] = useState(null);

  const filteringSearchQuery = (searchResults) => {
    if (searchResults) {
      const people = searchResults.filter((item) => item.media_type === "person");
      const movie = searchResults.filter((item) => item.media_type === "movie");
      setFilterPeople(people);
      setFilterMovie(movie);
    }
  }



  const searchAPI = (searchQuery) => {
    const options = { method: "GET", headers: { accept: "application/json" } };
    const API = `https://api.themoviedb.org/3/search/multi?query=${searchQuery}&api_key=${process.env.REACT_APP_API_KEY}`;

    fetch(API, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results);
        setSearchQuery(response.results);
        filteringSearchQuery(response.results);
      }).catch((err) => console.error(err));

  }


  useEffect(() => {
   
  }, []);
  // console.log(searchQuery)
  // console.log("filteredPeople")
  // console.log(filteredPeople)

  return (
    <div>Search

      <ChildComponent2></ChildComponent2>


    </div>
  )
}
