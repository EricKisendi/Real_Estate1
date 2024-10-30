import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import CardsGrid from './CardsGrid.jsx'
import About from './About.jsx'
// import About2 from './About2.jsx'
import PartnersSection from './PartnersSection.jsx'
import Footer from './Footer.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Navbar/>
      <Hero />
      <CardsGrid />
      <About />
      {/* <About2 /> */}
      <PartnersSection />
      <Footer />
      <App />
  </StrictMode>,
)
