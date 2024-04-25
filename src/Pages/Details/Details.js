import React, { useEffect, useState, Suspense }  from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import HeaderDetails from '../../Components/Navigation/Header/HeaderDetails';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Details() {
const [movie, setmovie] = useState({})
  let history = useNavigate();
  let { id } = useParams();
// https://api.themoviedb.org/3/movie/1096197?language=en-US

useEffect(() => {
  const options = {method: 'GET', headers: {accept: 'application/json'}};
  const API = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
console.log(API)
  fetch(API, options)
    .then(response => response.json())
    .then(response => {
console.log(response)
setmovie(response)
// 
      // console.log(movie)
      // console.log("movies")
     

    })
    .catch(err => console.error(err));


}, []);

  return (
    <div>
      
      <HeaderDetails {...movie} />
<MDBContainer  className='offset-1 mt-3'>
      <MDBRow>
        <MDBCol>
        {movie.overview}
        <MDBRow>
        <MDBCol></MDBCol>
        <MDBCol>Director
          
        </MDBCol>
        <MDBCol>Generes</MDBCol>
        </MDBRow>
        </MDBCol>
        <MDBCol className='d-flex justify-content-center'>
          <img className='w-50' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
        </MDBCol>
        
      </MDBRow>
     
    </MDBContainer>
    {id}

    <p>
    <button onClick={() => history(-1)}>Go Back</button>
    </p>
    </div>
  )
}
