import React, { useEffect, useState } from 'react';
import Header from '../../Components/Navigation/Header/Header';
import Categories from '../Categories/Categories';

export default function Home() {
    const [data, setData] = useState(null);
    const [moviePosterNumber, setMoviePosterNumber] = useState('');
    const [movies, setMovies] = useState([]);
    // const dataCall = async (movieNumber) => {
    //     const options = {method: 'GET', headers: {accept: 'application/json'}};
    //     const API = `https://api.themoviedb.org/3/movie/2312/images?api_key=${process.env.REACT_APP_API_KEY}`
    // // https://api.themoviedb.org/3/movie/popular/images?api_key=<<api_key>>&language=en-US&page=1
    // // https://api.themoviedb.org/3/movie/popular/api_key=b14ba5de06eadbad8c6d48504b267328
    // // https://api.themoviedb.org/3/movie/popular?api_key=b14ba5de06eadbad8c6d48504b267328
    //       .then(response => response.json())
    //       .then(response => setData(response))
    //       .catch(err => console.error(err));
    //   }

    useEffect(() => {
        const options = {method: 'GET', headers: {accept: 'application/json'}};
        const API = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    
        fetch(API, options)
          .then(response => response.json())
          .then(response => {
            setData(response.results)

            if (response.results.length > 0) {
              setMoviePosterNumber(response.results[0].backdrop_path)
              setMovies(response.results)
            }
            console.log(data)
            console.log(movies)
            // setMoviePosterNumber(data[0].backdrop_path)

          })
          // .then(response => console.log(response.results))
          // .then(response => setMoviePosterNumber(response.results[0].backdrop_path))
          .catch(err => console.error(err));


      }, []);

      
      // console.log(data)
      // // console.log(data[0])
      // // console.log(data[0].backdrop_path)
      // console.log(moviePosterNumber)

  return (
    <div>

      {/* {
        moviePosterNumber.length > 0 && <Header background={moviePosterNumber} />
      } */}

<Categories />

    </div>
  )
}
