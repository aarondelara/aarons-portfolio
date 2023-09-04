import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import Resume from './components/pages/Resume'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'



function App() {

  return (
    < Router>
      <Header />
      <Nav />
      <Routes>
        <Route path={"/"} element={<Resume />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/projects"} element={<Projects />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
