import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Credits from './components/credits/Credits'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <Projects />
        <About />
        <Skills />
        <Contact />
        <Credits />
    </>
  )
}

export default App