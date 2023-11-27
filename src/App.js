
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar'
import Skills from './components/Skills';
import Work from './components/Work';
import { useRef } from 'react'

function App() {
  const workRef = useRef(null);
  return (
    <div className="App">

      <NavBar />
      <Home workRef={workRef} />
      <About />
      <Skills />
      <Work ref={workRef} />
      <Contact />

    </div >
  );
}

export default App

