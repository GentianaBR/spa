import React, { useState } from "react";
import './home.css';
import projectImage from '../assets/sc.jpg';       // Restaurangbild
import poesiImage from '../assets/poesi.jpg';      // Poesibild
import figmaImage from '../assets/PRO.jpg'; // Lägg till en skärmdump från din Figma-prototyp

function Projects(props) {
  const [activeTab, setActiveTab] = useState('ux');

  return (
    <div className="projects-container">
      <h2>Mina Projekt</h2>

      <div className="tab-buttons">
        <button 
          className={`tab-button ${activeTab === 'ux' ? 'active' : ''}`} 
          onClick={() => setActiveTab('ux')}
        >
          UX/UI-projekt
        </button>
        <button 
          className={`tab-button ${activeTab === 'code' ? 'active' : ''}`} 
          onClick={() => setActiveTab('code')}
        >
          HTML/CSS/JS-projekt
        </button>
      </div>

      <div className="project-content">
        {activeTab === 'ux' && (
          <div className="project-grid">
            <div className="project-card">
              <h4>🎨 E-handel Prototyp</h4>
              <p>On process..</p>
            </div>
            <div className="project-card">
              <h4>📧 E-posttjänst Prototyp</h4>
              <p>Interaktiv prototyp i Figma med fokus på ett intuitivt användarflöde.</p>
              <img 
                src={figmaImage}
                alt="Figma prototyp för e-posttjänst"
                className="project-image"
              />
              <a 
                href="https://www.figma.com/proto/4borYt6dkrYUA7RSv1vJ1O/PRO-e-post?node-id=1-2&starting-point-node-id=1%3A2" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                Visa Figma-prototyp
              </a>
            </div>
          </div>
        )}

        {activeTab === 'code' && (
          <div className="project-grid">
            <div className="project-card">
              <h4>🍽️ Restaurant Website</h4>
              <p>Responsiv webbplats med meny och bokning, byggd med HTML, CSS och JavaScript.</p>
              <img 
                src={projectImage}
                alt="Restaurant Website Screenshot"
                className="project-image"
              />
              <a 
                href="https://viktorwahlqvist.github.io/restaurant-project/index.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                Se Projekt
              </a>
            </div>

            <div className="project-card">
              <h4>Pärm och Poesi</h4>
              <p>En digital samling av recensioner, byggd med HTML, CSS Grid & Flexbox.</p>
              <img 
                src={poesiImage}
                alt="Poesi Projekt"
                className="project-image"
              />
              <a 
                href="https://martensven.github.io/Projekt/recensioner.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                Se Projekt
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
