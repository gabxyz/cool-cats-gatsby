import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import { motion } from "framer-motion"

export default function Layout({ children }) {
  return (
    <div className="layout">
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
      <footer>
        <p>Developed by Gabxyz - 2021</p>
      </footer>
    </div>
  )
}
