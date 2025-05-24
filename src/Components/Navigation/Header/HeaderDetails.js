import React, { useState } from 'react';

// if the component has a null backdrop_path, it will use a solid red background else it will use the backdrop_path from the props


export default function HeaderDetails(props) {
const [available, setAvailable] = useState(props.backdrop_path !== null ? `https://image.tmdb.org/t/p/original${props.backdrop_path}` : 'https://image.tmdb.org/t/p/original' + props.poster_path);



  return (
    <div
    className='p-5 text-center bg-image detailsHeader'
    style={ props.backdrop_path !== null ? {backgroundImage: `url('https://image.tmdb.org/t/p/original${props.backdrop_path}')`, height: '60vh', minHeight: '400px' } : { backgroundColor: '#A10000', height: '60vh', minHeight: '400px'} }
  >
    {/* <div
    className='p-5 text-center bg-image'
    style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${props.backdrop_path}')`, height: '60vh', minHeight: '400px'}}
  > */}
    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <div className='d-flex justify-content-start align-items-center h-100'>
        <div className='text-white col-4 offset-1'>
          <h1 className='display-3 fw-bold'>{props.title}</h1>
          <p>{props.release_date && props.release_date.substring(0, 4)}</p>
        </div>
      </div>
    </div>
  </div>
  )
}
