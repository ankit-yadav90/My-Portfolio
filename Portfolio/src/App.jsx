import Navbar from "./components/Navbar"
import CoustomCursor from "./components/CoustomCursor"
import Home from "./sections/Home"
import About from "./sections/About"
import Skills from './sections/Skills'
import Project from "./sections/Project"
import Experence from "./sections/Experence"
import Testmonials from "./sections/Testmonials"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import IntroAnimation from "./components/IntroAnimation"
import React from "react"

export default function App(){
  const[introDone, setIntroDone] = React.useState(false)
  return(
    <>
      {!introDone && <IntroAnimation onfinish={() => setIntroDone(true)}></IntroAnimation>}
      {introDone && (

    <div className="relative gradient text-white">
      <CoustomCursor></CoustomCursor>
       <Navbar></Navbar>
       <Home></Home>
       <About></About>
       <Skills></Skills>
       <Project></Project>
       <Experence></Experence>
       <Testmonials></Testmonials>
       <Contact></Contact>
       <Footer></Footer>
    </div>
    )}
    </>
  )
}