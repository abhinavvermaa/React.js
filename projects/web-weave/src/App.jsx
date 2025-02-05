import Navbar from "./components/Navbar"
import Content from "./components/Content"
import Projects from "./components/projects"
function App() {

  return (

    <div className="bg-gradient-to-r from-slate-600 to-slate-900 text-white min-h-screen scroll-smooth">
      <Navbar></Navbar>
      <Content></Content>
      <Projects />
    </div>
  )
}

export default App
