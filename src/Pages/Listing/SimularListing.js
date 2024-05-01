import { useEffect, useState, Suspense } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import Rating from "../../Components/Rating/Rating";
import DisplaySmall from "../../Components/Displays/Display";
import DisplaySmallThumbs from "../../Components/Displays/Display";

  export default function SimularListing({simularMovie, index}) {
    {console.log(simularMovie)}
    return (
      
       <MDBCol
        lg="2"
        md="3"
        sm="6"
        key={index}
        className="mb-6 d-flex justify-content-center flex-column"
      >
          <Link to={`../listing/${simularMovie.id}`}>
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
  