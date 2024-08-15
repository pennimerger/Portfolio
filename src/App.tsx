import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <section className='flex flex-col'
      id="Homepage">
        <Navbar />
        <Hero/>
      </section>
      <section id="Portfolio">
        <Portfolio />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default App