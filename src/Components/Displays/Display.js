import React from 'react'

export default function DisplaySmall({ imageUrl, alt }) {
    // console.log(imageUrl)
    // console.log(alt)
  return (
    <div>  
        <img
    src={`https://image.tmdb.org/t/p/original${imageUrl}`}
    className='displayImages'
    // className='img-fluid shadow-2-strong custom-img'
    alt={alt}
  /></div>
  )
}
