import React, { useEffect, useState, useRef } from "react";
import Header from "../../Components/Navigation/Header/Header";
import Categories from "../Categories/Categories";
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


  return (
    <div>
      <Intro></Intro>
      <motion.div
        className="categories"
        ref={categoriesRef}
        initial={{ scale: 0 }}
        animate={{ scale: categoriesInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Categories />
      </motion.div>

      <div style={{ height: "100vh", backgroundColor: "red" }}></div>

      <motion.div
        ref={searchRef}
        initial={{ scale: 0 }}
        animate={{ scale: searchInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Search />
      </motion.div>
      <div style={{ height: "100vh", backgroundColor: "red" }}></div>
    </div>
  );
}
