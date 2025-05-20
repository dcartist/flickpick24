import React from "react";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";

const SearchContainer = ({ children }) => {
  return <MDBContainer className="fullHeight">{children}</MDBContainer>;
};

const ContainerWithRow = ({ children, rowClassName = "", containerClassName = ""}) => {
  return (
    <MDBContainer className={containerClassName}>
      <MDBRow className={rowClassName}>{children}</MDBRow>
    </MDBContainer>
  );
};

export { SearchContainer, ContainerWithRow };
