import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <Navbar />
      <main className="app-main">
        <section id="sobre-mi" className="page-section">
          <Hero />
        </section>

        <section id="proyectos" className="page-section">
          <Projects />
        </section>

        <section id="tecnologias" className="page-section">
          <TechStack />
        </section>
      </main>
      <Footer id="contacto" />
    </div>
  );
}

export default App;