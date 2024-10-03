import About from './components/About'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div className='overflow-hidden'>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App