import React, { useEffect, useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import {SearchContainer} from '../../Components/Container/Container';
import DisplayList from '../../Components/Displays/DisplayList';
export default function SearchPage() {

  const [filteredPeople, setFilterPeople] = useState(null);
  const [filteredMovie, setFilterMovie] = useState([]);
  const [value, setValue] = useState('');

  const filteringSearchQuery = (searchResults) => {
    if (searchResults) {
      const people = searchResults.filter((item) => item.media_type == "person");
      const movie = searchResults.filter((item) => item.media_type === "movie");
      setFilterPeople(people);
      setFilterMovie(movie);
    }
  }
  const searchAPI = (searchQuery) => {
    const options = { method: "GET", headers: { accept: "application/json" } };
    const movieAPI = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${process.env.REACT_APP_API_KEY}&page=1`;
    const personAPI = `https://api.themoviedb.org/3/search/person?query=${searchQuery}&api_key=${process.env.REACT_APP_API_KEY}&page=1`;

    // Fetching Person
    fetch(personAPI, options)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.results);
        setFilterPeople(response.results);
      }).catch((err) => console.error(err));


    // Fetching Movies
    fetch(movieAPI, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results);
       return setFilterMovie(response.results);
        console.log(filteredMovie)
      }).catch((err) => console.error(err));

  }

  useEffect(() => {
    console.log(value)
    if (value.length > 1) {
      searchAPI(value);
    }
  }, [value]);

console.log(filteredMovie)
  return (
    <SearchContainer className="fullHeight">
    <div>
      <h2>Search for a movie or person</h2>

      <MDBInput
      value={value}
      onChange={(e) => setValue(e.target.value)}
      label='Search for a movie or person...'
      id='controlledValue'
      type='text'
      size="lg"
      contrast
    />

{
  filteredMovie && filteredMovie.length > 0 && <DisplayList movies={filteredMovie} />
}
    </div>
      </SearchContainer>
  )
}
