import React, { useRef } from 'react';
import { MDBLazyLoading, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
export default function DisplaySmall({ imageUrl, alt }) {
    // console.log(imageUrl)
    // console.log(alt)
    const basicContainer = useRef(null);
  return (
    <div className="text-center">  

<MDBLazyLoading
//  containerRef={basicContainer}
          lazySrc={`https://image.tmdb.org/t/p/original${imageUrl}`}
          lazyPlaceholder='https://place-hold.it/300x500/666/fff/000?text=loading...&fontsize=16'
        //   lazyPlaceholder='https://place-hold.it/1321x583?text=Loading'
        //   lazyDelay={1000}
          alt={alt}
          className='displayImages shadow-custom'
          animation='zoom-in'
        />
        {/* <img
    src={`https://image.tmdb.org/t/p/original${imageUrl}`}
    className='displayImages'
    alt={alt}
  /> */}
  
  </div>
  )
}
