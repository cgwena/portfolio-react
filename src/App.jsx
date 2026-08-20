
import styles from './App.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Veille } from './components/Veille/Veille'
import { Contact } from './components/Contact/Contact'
import { ProjectDetails } from './components/Projects/ProjectDetails'
import { ScrollToTop } from './ScrollToTop';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* La page d'accueil affiche tout votre contenu habituel */}
        <Route path="/" element={
          <div className={styles.App}>   
            <Hero />
            <About />
            <Projects />
            <Veille />
            <Contact />
          </div>
        } />

        {/* La nouvelle route dynamique pour chaque projet */}
        <Route path="/projet/:id" element={
          <div className={styles.App}>
            <ProjectDetails />
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
