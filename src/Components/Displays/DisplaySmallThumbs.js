import React, { useRef, useState, useEffect } from 'react';
import { MDBLazyLoading, MDBContainer, MDBAnimation, MDBRow } from 'mdb-react-ui-kit';
import noposter from '../../Components/Image/noposter.jpeg';

export default function DisplaySmallThumbs({ imageUrl, alt, starter }) {

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
   src={imageUrl}
   className='displayImagesThumb'
 />
</div>
  )
}
