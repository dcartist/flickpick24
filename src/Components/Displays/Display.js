import React, { useRef } from 'react';
import { MDBLazyLoading, MDBContainer, MDBAnimation, MDBRow } from 'mdb-react-ui-kit';


export default function DisplaySmall({ imageUrl, alt, starter }) {

    const basicContainer = useRef(null);
  return (
    <div className="text-center">  
             <MDBAnimation
            reset={true}
            tag='img'
            repeatOnScroll
            start={starter}
            // start='onLoad'
            animation='fade-in'
            duration={1000}
            delay={300}
            // delay={1000}
            alt={alt}
            src={`https://image.tmdb.org/t/p/original${imageUrl}`}
            className='displayImages'
          />
        {/* <img
    src={`https://image.tmdb.org/t/p/original${imageUrl}`}
    className='displayImages'
    alt={alt}
  /> */}
  
  </div>
  )
}
