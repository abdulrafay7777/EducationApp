import { useState } from 'react'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Programs from './Components/Programs/Programs'
import Testimonials from './Components/Testimonials/Testimonials'
import Title from './Components/Title/Title'
import Video from './Components/Video/Video'

function App() {

  const [play, setPlay] = useState(false);


  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Our Programs' Title='What we offer' />
        <Programs />
        <About setPlay={setPlay} />
        <Title subTitle='Gallery' Title='Campus Photos' />
        <Campus />
        <Title subTitle='TESTIMONIALS' Title='What students say' />
        <Testimonials />
        <Title subTitle='Contact Us' Title='Get in Touch' />
        <Contact />
        <Footer />

      </div>
        <Video play={play} setPlay={setPlay} />
    </div>
  )
}

export default App
