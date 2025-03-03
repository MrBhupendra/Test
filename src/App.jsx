
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Skill from './pages/Skill'

function App() {
  return (
    <>
      <Navbar/>
      <Home />
      <About />
      <Skill />
      <Footer />
    </>
  )
}

export default App
