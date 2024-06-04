import React, { useEffect, useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import { SearchContainer } from "../../Components/Container/Container";
import DisplayList from '../../Components/Displays/DisplayList';

export default function Year() {
  const [year, setYear] = useState(2022);
  const [filteredMovie, setFilterMovie] = useState([]);
  const [value, setValue] = useState(2024);

  const searchAPI = (searchQuery) => {
    const options = { method: "GET", headers: { accept: "application/json" } };
    const movieAPI = `https://api.themoviedb.org/3/discover/movie?primary_release_year=${value}&api_key=${process.env.REACT_APP_API_KEY}&page=1`;

    // Fetching timeline
    fetch(movieAPI, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results);
        setFilterMovie(response.results);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    console.log(value)
      if(!isNaN(value) && value.toString().length === 4) {
        searchAPI(value);
      }
    }, [value]);

  return (
    <SearchContainer>
    <div>
      Year
      <MDBInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="Search for a movie or person..."
        id="controlledValue"
        type="text"
        size="lg"
        contrast
      />
    </div>
    {
  filteredMovie && filteredMovie.length > 0 && <DisplayList movies={filteredMovie} />
}
    </SearchContainer>
  );
}
