import { useEffect, useState, Suspense } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import Rating from "../Rating/Rating";
import { ContainerWithRow } from "../Container/Container";
// const DisplaySmall = React.lazy(() =>
//   import("../../Components/Displays/Display")
// );

import DisplaySmall from "../../Components/Displays/Display";


export default function DisplayList({movies}) {
  return (
    <div>  
      <ContainerWithRow containerClassName="mt-5">
      {movies.map((movie, index) => {
        return (
          <MDBCol
            lg="3"
            md="3"
            sm="6"
            key={movie.id}
            className="mb-6 d-flex justify-content-center flex-column"
          >
            <p>
              <Suspense fallback={<div>Loading...</div>}>
                <Link to={`/listing/${movie.id}`}>
                  {index > 3 ? (
                    <DisplaySmall
                      starter="onScroll"
                      imageUrl={movie.poster_path}
                      alt={movie.title}
                    />
                  ) : (
                    <DisplaySmall
                      starter="onLoad"
                      imageUrl={movie.poster_path}
                      alt={movie.title}
                    />
                  )}
                </Link>
              </Suspense>
            </p>
            <div>
              <Link
                to={`/listing/${movie.id}`}
                className="link-secondary text-white"
              >
                {movie.title}
              </Link>{" "}
            </div>
            <MDBRow>
              <MDBCol md="6" className="link-secondary text-white">
                <Link
                  className="link-secondary text-white"
                  to={`/listing/${movie.id}`}
                >
                  {movie.release_date.substring(0, 4)}
                </Link>
              </MDBCol>
              <MDBCol md="6">
                <Link
                  to={`/listing/${movie.id}`}
                  className="link-secondary text-white"
                >
                  <Rating
                    ratingNumber={Math.round(movie.vote_average)}
                  ></Rating>
                </Link>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        );
      })}
  </ContainerWithRow>
  </div>
  )
}
