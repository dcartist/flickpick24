import React from 'react'

import { useParams, useNavigate } from "react-router-dom";
export default function ReturnButton() {
    let history = useNavigate();
  return (
    <div><button onClick={() => history(-1)}>Go Back</button></div>
  )
}
