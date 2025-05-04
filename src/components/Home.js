
import React from 'react'
import profileImg from '../assets/cv photo.jpg'; // ändra sökvägen till din bild
import './home.css'; // valfritt för styling
import { NavLink } from 'react-router-dom';




function Home() {
  return (
    <>
      <div className="home-container">
        <img src={profileImg} alt="Bild på mig" className="profile-img" />
      </div>

      <div className="highlights">
        <h3>Det här kan du förvänta dig utav Gentiana:</h3>
        <ul>
          <li>🔥 Passion för användarupplevelse</li>
          <li>⚙️ Fokus på detaljer och kodkvalitet</li>
          <li>🚀 Nyfiken på ny teknik och ständig utveckling</li>
        </ul>

        {/* Här är NavLink till Projects */}
        <div className="button-group">
  <NavLink to="/projects" className="cta-button">Se mina projekt</NavLink>
  <NavLink to="/about" className="cta-button">Om mig</NavLink>
  <NavLink to="/contact" className="cta-button">Kontakta mig</NavLink>
</div>
      </div>
    </>
  );
}

export default Home
