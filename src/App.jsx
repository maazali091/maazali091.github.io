import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Work from './Components/Work'
import Projects from './Components/Projects'
import OtherProjects from './Components/OtherProjects'
import GetinTouch from './Components/GetinTouch'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='min-h-screen bg-slate-900 text-zinc-50 antialiased selection:bg-emrald-400 selection:text-zinc-950'>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Projects />
      <OtherProjects />
      <GetinTouch />
      <Footer />
    </div>
  )
}

export default App