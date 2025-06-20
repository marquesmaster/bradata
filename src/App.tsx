import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Partners from './components/Partners';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Blog from './components/Blog';
import SolucoesPage from './pages/SolucoesPage'; // Importe a nova página de Soluções

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Partners />
              <CaseStudies />
              <Contact />
            </>
          } />
          <Route path="/sobre" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          {/* Adicione a nova rota para a página de Soluções */}
          <Route path="/solucoes" element={<SolucoesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;