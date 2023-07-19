import './App.css'
import About from './components/About'
import { useState } from 'react'

// Components
import Header from './components/Header'
import Home from './components/Home'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'

function App() {

  const [sticky, setSticky] = useState('')

  function toggleActive() {
    

  }

  window.onscroll = ()=> {

    

    if(window.scrollY > 100) {
      setSticky('sticky')
    }else {
      setSticky('')
    }
  }

  return (
    <>
      <Header sticky={sticky}/>
      <Home />
      <About />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App