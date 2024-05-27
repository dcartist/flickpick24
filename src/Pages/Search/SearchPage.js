import React, { useEffect, useState } from 'react';
import { ChildComponent2, SearchEntireComponent } from "../../API/ApiListing";
import { MDBInput } from 'mdb-react-ui-kit';

export default function SearchPage() {

  // const [searchQuery, setSearchQuery] = useState(null);
  const [filteredPeople, setFilterPeople] = useState(null);
  const [filteredMovie, setFilterMovie] = useState(null);
  const [value, setValue] = useState('');

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
        // setSearchQuery(response.results);
        filteringSearchQuery(response.results);
      }).catch((err) => console.error(err));

  }
// add useEffect to call the searchAPI function when value changes
  useEffect(() => {
    // searchAPI(value);
    console.log(value)
  }, [value]);


  return (
    <div>Search

      <ChildComponent2></ChildComponent2>
      <MDBInput
      value={value}
      onChange={(e) => setValue(e.target.value)}
      label='Search for a movie or person...'
      id='controlledValue'
      type='text'
      size="lg"
      contrast
    />


    </div>
  )
}
