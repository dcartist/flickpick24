import React, { useRef, useState } from 'react';
import { MDBLazyLoading, MDBContainer, MDBAnimation, MDBRow } from 'mdb-react-ui-kit';
import noposter from '../../Components/Image/noposter.jpeg';

export default function DisplaySmall({ imageUrl, alt, starter }) {
  const [isAvailable, setAvailable] = useState(imageUrl !== null ? `https://image.tmdb.org/t/p/original${imageUrl}` : noposter);
  console.log(isAvailable)
  console.log(imageUrl)

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
            src={isAvailable}
            className='displayImages'
          />
  </div>
  )
}

