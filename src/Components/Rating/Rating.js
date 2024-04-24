import React from 'react';
import { MDBRating, MDBRatingElement } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';

export default function Rating({ratingNumber}) {
    const newRating = Math.round(ratingNumber)
  return (
    <div>
       
    <MDBIcon icon='star' /> {newRating}/10
   
  </div>
  )
}
