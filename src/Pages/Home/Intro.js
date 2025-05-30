import React from 'react'
import { motion } from 'framer-motion';
import movieReel from "../../Components/Image/movieReel.png"
import movieBackground from "../../Components/Image/popcorn.png"

export default function Intro() {
  const styles = {
    background: `url(${movieBackground}), linear-gradient(180deg, rgba(161, 0, 0, 1) 7%, rgba(3, 0, 0, 1) 94%)`,
    backgroundSize: 'cover',
    backgroundPosition: 'top left',
    height: '100vh',
    width: '100%',
    borderTop: '5px solid #000',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <div className="intro-Background" style={styles}>
      {/* Example animated image, uncomment if you want it */}
      {/* 
      <motion.img
        src={movieReel}
        alt="Movie Reel"
        animate={{ rotate: [0, 360], scale: [.9, 1, .9], y: [0, -20, 0] }} 
        transition={{
          rotate: { duration: 3, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{
          position: 'relative',
          top: '-50px',
          maxHeight: '300px',
          filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.5))'
        }}
      />
      */}
      <p className='title_header'>FlickPick</p>
    </div>
  )
}