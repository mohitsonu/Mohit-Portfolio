import React from 'react';
import Scene3D from './components/Scene3D';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="canvas-container">
        <Scene3D />
      </div>
      <div className="content-container">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
