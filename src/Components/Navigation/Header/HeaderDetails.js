import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function HeaderDetails(props) {
  return (
    <div
    className='p-5 text-center bg-image'
    style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${props.backdrop_path}')`, height: '60vh', minHeight: '400px'}}
  >
    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <div className='d-flex justify-content-start align-items-center h-100'>
        <div className='text-white col-4 offset-1'>
          <h1 className='display-3 fw-bold'>{props.title}</h1>
          <p>{props.release_date && props.release_date.substring(0, 4)}</p>
          {/* <MDBBtn tag="a" outline size="lg">
            
          </MDBBtn> */}
        </div>
      </div>
    </div>
  </div>
  )
}
