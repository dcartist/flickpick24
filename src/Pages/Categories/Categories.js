import React, { useEffect, useState, Suspense } from "react";

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function Categories() {

    const [movie, setmovie] = useState({});

    const firstLoad = () => {
        const options = { method: "GET", headers: { accept: "application/json" } };
        const API = `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${process.env.REACT_APP_API_KEY}`;
        fetch(API, options)
          .then((response) => response.json())
          .then((response) => {
            setmovie(response);
            console.log(response)
          }).catch((err) => console.error(err));
      }
    
  useEffect(() => {
    firstLoad()
  }, []);


  return (
    <div>
        <h1>Categories</h1>
        <MDBContainer fluid>
            <MDBRow className="mb-1 py-0 ">

                {
                    movie.genres && movie.genres.map((genre, index) => {
                        return (
                            
                            <MDBCol md="4" key={index}  className="text-center">
                                <h3>{genre.name}</h3>
                            </MDBCol>
                        )
                    })
                }
            <MDBCol> </MDBCol>
                </MDBRow>
            </MDBContainer>
    </div>
  )
}
