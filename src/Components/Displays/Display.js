import React, { useRef } from 'react';
import { MDBLazyLoading, MDBContainer, MDBAnimation, MDBRow } from 'mdb-react-ui-kit';


export default function DisplaySmall({ imageUrl, alt, starter }) {
  return (
    <div className="text-center">  
             <MDBAnimation
            reset={true}
            tag='img'
            repeatOnScroll
            start={starter}
            animation='fade-in'
            duration={1000}
            delay={300}
            alt={alt}
            src={`https://image.tmdb.org/t/p/original${imageUrl}`}
            className='displayImages'
          />
  </div>
  )
}


export const DisplaySmallThumbs = function ({ imageUrl, alt, starter }) {
  return (
    <div className="text-center">  
             <MDBAnimation
            reset={true}
            tag='img'
            repeatOnScroll
            start={starter}
            animation='fade-in'
            duration={1000}
            delay={300}
            alt={alt}
            src={`https://image.tmdb.org/t/p/original${imageUrl}`}
            className='displayImagesThumb'
          />
  </div>
  )
}