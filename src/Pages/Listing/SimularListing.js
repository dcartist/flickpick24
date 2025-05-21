import { useEffect, useState, Suspense } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import Rating from "../../Components/Rating/Rating";
import DisplaySmallThumbs from "../../Components/Displays/DisplaySmallThumbs";
import noposter from "../../Components/Image/noposter.jpeg";

  export default function SimularListing({simularMovie, index}) {
    // const [moviePoster, setMoviePoster] = useState(noposter);
    // if (simularMovie.poster_path !== null) {
    //   setMoviePoster(`https://image.tmdb.org/t/p/original${simularMovie.poster_path}`);
    // }
    console.log(simularMovie)
    return (
      
       <MDBCol
        lg="3"
        md="3"
        sm="6"
        key={index}
        className="mb-6 d-flex justify-content-center flex-column"
      >
   
          <Link to={`../listing/${simularMovie.id}`} onClick={() => window.scrollTo(0, 0)} className="text-whtie link-light">
  
        <p>
              {index ? (
                <DisplaySmallThumbs
                  starter="onScroll"
                  imageUrl={simularMovie.poster_path}
                  alt={simularMovie.title}
                />
              ) : (
                <DisplaySmallThumbs
                  starter="onLoad"
                  imageUrl={simularMovie.poster_path}
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
          
              <Rating
                ratingNumber={Math.round(simularMovie.vote_average)}
              ></Rating>
          </MDBCol>
        </MDBRow>
        </Link>
      </MDBCol>
    )
  }
  