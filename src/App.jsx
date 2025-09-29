import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Components
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Partners from './components/Partners'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

// Styles
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Features />
                <Partners />
                <FAQ />
              </>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App