import { useState } from 'react';
import './app.scss';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.min.js';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Menu from './components/navbar/menu/Menu';
import Intro from './components/intro/Intro';
import Info from './components/info/Info';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

export default function App() {
  const [ menuOpen, setMenuOpen ] = useState(false);

  return (
      <div className='app shadow-lg'>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Intro />
          <Info />
          <Projects />
          <Contact />
          <Footer />
      </div>
  )
}