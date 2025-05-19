import React from 'react'
import { motion } from 'framer-motion';
import movieReel from "../../Components/Image/movieReel.png"

export default function Intro() {
  return (
    <div className="d-flex justify-content-center align-items-center p-5 container-75">
        
        {/* <motion.img
          src={movieReel}
          alt="Movie Reel"
          animate={{ rotate: [0, 360], 
            scale: [.9, 1, .9], 
            y: [0, -20, 0]  }} 
          transition={{
            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            // y: { duration: 3, repeat: Infinity, ease: "easeInOut" } 
          }}
          style={{
            position: 'relative',
            top: '-50px',
            maxHeight: '300px',
            filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.5))'
          }}
        /> */}
        <p className='title_header'>FlickPick</p>

        {/* <img src={movieReel} alt="movie" /> */}
        {/* <motion.img
        src={movieReel}
        alt="Movie Reel"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        style={{ position: 'relative', top: '-50px', y: ['0px', '-20px', '0px'], x: ['0px', '20px', '0px'] }}
      /> */}
    </div>
  )
}
