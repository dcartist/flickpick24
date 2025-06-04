import React from 'react'
import { useNavigate } from "react-router-dom";

export default function ReturnButton() {
  const history = useNavigate();
  const handleClick = () => {
    history(-1);
    window.scrollTo(0, 0);
    console.log("Back button clicked");
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <button onClick={handleClick}>Go Back</button>
    </div>
  );
}