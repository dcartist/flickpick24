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

export default function Header(props) {
    console.log(props.background)
  return (
    <div
    className='p-5 text-center bg-image'
    style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${props.background}')`, height: '90vh' }}
    // style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '400px' }}
  >
    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
      <div className='d-flex justify-content-center align-items-center h-100'>
        <div className='text-white'>
          <h1 className='mb-3'>Heading</h1>
          <h4 className='mb-3'>Subheading</h4>
          
          <MDBBtn tag="a" outline size="lg">
            Call to action
          </MDBBtn>
        </div>
      </div>
    </div>
  </div>
  )
}
