import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cool Cats</title>
        <link rel="icon" type="svg" href="/catLogo.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Helmet>
      <Navbar />
      <motion.main
        className="content"
        initial={{
          opacity: 0,
          x: -200,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: 200,
        }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.3,
        }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  )
}
