import React from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Services from './components/Services'
import About from './components/About'
import Testimonial from './components/Testemonial'
import Contact from './components/Contact'
import BackTop from './components/BackTop'

const App = () => {
  return (
    <div className='snap-both'>
      <NavBar/>
      <Banner/>
      <Services/>
      <About/> 
      <Testimonial/>
      <Contact/>
      <BackTop/>
    </div>
  )
}

export default App