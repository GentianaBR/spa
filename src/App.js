import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import * as bootstrap from 'bootstrap';
import { useDispatch, useSelector } from 'react-redux';

// Importerar de olika sidkomponenterna (views)
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

// Funktion för att stänga hamburger-menyn om den är öppen (används på mobiler)
const closeNavbar = () => {
  const navbar = document.getElementById('navbarNavAltMarkup');
  if (navbar && navbar.classList.contains('show')) {
    const bsCollapse = bootstrap.Collapse.getInstance(navbar) || new bootstrap.Collapse(navbar);
    bsCollapse.hide();
  }
};

// Wrapper-komponent som innehåller navigation, routes och tematoggle
function AppWrapper() {
  const location = useLocation();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

    // Funktion som togglar (byter) mellan ljust och mörkt tema
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  useEffect(() => {
    closeNavbar();
  }, [location]);

  return (
    <div className={`App ${theme}`}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand logo" to="/">GBR</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/" onClick={closeNavbar}>Home</NavLink>
            <NavLink className="nav-item nav-link" to="/about" onClick={closeNavbar}>About</NavLink>
            <NavLink className="nav-item nav-link" to="/projects" onClick={closeNavbar}>Projects</NavLink>
            <NavLink className="nav-item nav-link" to="/contact" onClick={closeNavbar}>Contact</NavLink>
            <button onClick={toggleTheme} className="btn btn-outline-secondary ms-3">
              Byt tema ({theme})
            </button>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
            {/* Gemensam footer längst ner */}
      <Footer />
    </div>
  );
}

// Här har jag lagt Router runt AppWrapper för att möjliggöra navigation i hela appen
function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
