import { useEffect, useState, Suspense } from "react"
import React from 'react';
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
// import React from 'react'
import DisplaySmall from "../../Components/Displays/Display";
import Rating from "../../Components/Rating/Rating";
// const DisplaySmall = React.lazy(() => import('../../Components/Displays/Display'));

export default function Listing() {
    const [movies, setMovies] = useState([])

    // useEffect(() => {    
    //     fetch('${process.env.REACT_APP_API_URL}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    // }, [])
    useEffect(() => {
        const options = {method: 'GET', headers: {accept: 'application/json'}};
        const API = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    
        fetch(API, options)
          .then(response => response.json())
          .then(response => {
console.log(response.results)
setMovies(response.results)

            // if (response.results.length > 0) {
            // //   setMoviePosterNumber(response.results[0].backdrop_path)
            //   setMovies(response.results)
            // }
            // console.log(data)
            console.log(movies)
            console.log("movies")
            // setMoviePosterNumber(data[0].backdrop_path)

          })
          // .then(response => console.log(response.results))
          // .then(response => setMoviePosterNumber(response.results[0].backdrop_path))
          .catch(err => console.error(err));


      }, []);


  return (
    <div>
        {/* <DisplaySmall url="oompa" imageUrl="test"></DisplaySmall> */}
         <MDBContainer className="mt-5">

      <MDBRow>

        {
            movies.map((movie, index) => {
                return (
                <MDBCol lg="3" md='3' sm="6" key={index} className="mb-6 d-flex justify-content-center flex-column">
                    <p>
                    <Suspense fallback={<div>Loading...</div>}><Link to={`/listing/${movie.id}`}>
  <DisplaySmall imageUrl={movie.poster_path} alt={movie.title} /></Link>
</Suspense>
                    </p>
                    <div><Link to={`/listing/${movie.id}`} className="link-secondary text-white">{movie.title}</Link> </div>
                   <MDBRow>
                   
                    <MDBCol md="6" className="link-secondary text-white"><Link className="link-secondary text-white" to={`/listing/${movie.id}`}>{movie.release_date.substring(0, 4)}</Link></MDBCol>
                    <MDBCol md="6"><Link to={`/listing/${movie.id}`} className="link-secondary text-white"><Rating ratingNumber={Math.round(movie.vote_average)}></Rating></Link></MDBCol>
                   </MDBRow>
                  
                </MDBCol>
                )
            })
        }
        {/* <MDBCol md='3' sm="6">Column 1</MDBCol> */}
       
      </MDBRow>
    </MDBContainer>


    </div>
  )
}
