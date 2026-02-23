import Navbar from "./components/Navbar"
import CoustomCursor from "./components/CoustomCursor"
// import ParticalesBackground from "./components/ParticalesBackground"
import Home from "./sections/Home"
import About from "./sections/About"
import Skills from './sections/Skills'
import Project from "./sections/Project"
import Experence from "./sections/Experence"
import Testmonials from "./sections/Testmonials"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

export default function App(){
  return(
    <div className="relative gradient text-white">
      <CoustomCursor></CoustomCursor>
      {/* <ParticalesBackground></ParticalesBackground> */}
       <Navbar></Navbar>
       <Home></Home>
       <About></About>
       <Skills></Skills>
       <Project></Project>
       <Experence></Experence>
       <Testmonials></Testmonials>
       <Contact></Contact>
       <Footer></Footer>

       keuch bhi
    </div>
  )
}