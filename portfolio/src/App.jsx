import Navbar from "./components/Navbar"
import About from "./components/About"
import AboutSummary from "./components/AboutSummary"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
function App() {

  return (
    <div className='bg-gradient-to-r from-slate-600 to-slate-900 text-white min-h-screen scroll-smooth' >
     <Navbar></Navbar>
     <About></About>
     <AboutSummary />
     <Skills />
     <Experience />
     <Projects />
     <Footer />
    </div>
  )
}

export default App
