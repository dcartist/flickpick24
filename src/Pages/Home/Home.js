import React, { useEffect, useState, useRef } from "react";
import Header from "../../Components/Navigation/Header/Header";
import Categories from "../Categories/Categories";
import CategoriesListing from "../Categories/CategoriesListing";
import CategoriesHome from "../Categories/CategoriesHome";
import MovieDomeGallery from "../../Components/Gallery/MovieDomeGallery";
import Search from "./Search";
import Intro from "./Intro";
import { gsap } from "gsap";
import { useTween } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {

  const [categoriesRef, categoriesInView] = useInView({
    triggerOnce: false, 
  });

  const [searchRef, searchInView] = useInView({
    triggerOnce: false, 
  });

  const [galleryRef, galleryInView] = useInView({
    triggerOnce: false, 
  });

  return (
    <div>
      {/* <Intro></Intro> */}
      {/* <motion.div
        className="categories"
        ref={categoriesRef}
        initial={{ scale: 0 }}
        animate={{ scale: categoriesInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Categories />
      </motion.div> */}
       <MovieDomeGallery />
        <CategoriesHome />

      <div style={{ height: "50vh", backgroundColor: "transparent" }}></div>

      {/* <motion.div
        ref={galleryRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: galleryInView ? 1 : 0,
          y: galleryInView ? 0 : 50 
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <MovieDomeGallery />
      </motion.div> */}

      <div style={{ height: "50vh", backgroundColor: "transparent" }}></div>

      <motion.div
        ref={searchRef}
        initial={{ scale: 0 }}
        animate={{ scale: searchInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Search />
      </motion.div>
      <div style={{ height: "50vh", backgroundColor: "transparent" }}></div>
    </div>
  );
}
