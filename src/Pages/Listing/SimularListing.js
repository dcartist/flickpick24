import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import Rating from "../../Components/Rating/Rating";
import DisplaySmallThumbs from "../../Components/Displays/DisplaySmallThumbs";
import noposter from "../../Components/Image/noposter.jpeg";

export default function SimularListing({ simularMovie, index }) {
  const [moviePoster, setMoviePoster] = useState(noposter);

  useEffect(() => {
    if (simularMovie.poster_path) {
      setMoviePoster(`https://image.tmdb.org/t/p/original${simularMovie.poster_path}`);
    } else {
      setMoviePoster(noposter);
    }
  }, [simularMovie.poster_path]);

  return (
    <MDBCol
      lg="3"
      md="3"
      sm="6"
      key={index}
      className="mb-6 d-flex justify-content-center flex-column"
    >
      <Link to={`../listing/${simularMovie.id}`} onClick={() => window.scrollTo(0, 0)} className="text-white link-light">
        <p>
          {index ? (
            <DisplaySmallThumbs
              starter="onScroll"
              imageUrl={moviePoster}
              alt={simularMovie.title}
            />
          ) : (
            <DisplaySmallThumbs
              starter="onLoad"
              imageUrl={moviePoster}
              alt={simularMovie.title}
            />
          )}
        </p>
        <div>
          {simularMovie.title}
        </div>
        <MDBRow>
          <MDBCol md="6" className="link-secondary text-white">
            {simularMovie.release_date && simularMovie.release_date.substring(0, 4)}
          </MDBCol>
          <MDBCol md="6">
            <Rating ratingNumber={Math.round(simularMovie.vote_average)} />
          </MDBCol>
        </MDBRow>
      </Link>
    </MDBCol>
  );
}
