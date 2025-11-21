import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Navigation() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <MDBNavbar expand="lg" dark style={{ backgroundColor: "#a10000" }}>
      <MDBContainer fluid>
        <MDBNavbarBrand as={Link} to="/home" className="title_header">
          FlickPick
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink aria-current="page">
                <Link to="../" className="link-secondary text-white">
                  Home
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink as={Link} to="/listing">
                <Link to="/listing" className="link-secondary text-white">
                  Listing
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink as={Link} to="/movieposter">
                <Link to="/movieposter" className="link-secondary text-white">
                  Movie Poster Maker
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink as={Link} to="/search">
                <Link to="/search" className="link-secondary text-white">
                  Search
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
