import React from "react";
import './home.css'; // Vi importerar en CSS-fil för styling


function About(props){
    return(
        <div className="about-container">
      <div className="section">
        <h2>Kompetenser</h2>
        <ul>
    <li>✅ HTML5, CSS3 & Flexbox/Grid</li>
    <li>✅ JavaScript (ES6+)</li>
    <li>✅ React.js & Hooks</li>
    <li>✅ React Router</li>
    <li>✅ Tailwind CSS / Bootstrap</li>
    <li>✅ Git & GitHub</li>
    <li>✅ Figma / Adobe XD</li>
  </ul>
      </div>
      <div className="section">
        <h2>Erfarenhet</h2>
        <li>Juni 2016-September 2016: Habiliteringsassistent</li>
        <li>September 2016- pågående: Barnskötare</li>
        
      </div>
      <div className="section">
        <h2>Kunskaper</h2>
        <li>🛠️ Versionshantering med Git & GitHub</li>
    <li>🎨 UX/UI-designprinciper</li>
    <li>🌐 Responsiv design & mobilanpassning</li>
    <li>🔍 SEO-grunder och prestandaoptimering</li>
    <li>📄 Dokumentation & kodstandard (ESLint, Prettier)</li>
    <li>💡 Problem­lösning och agilt arbete (Scrum/Kanban)</li>
      </div>
      <div className="section">
        <h2>Om mig</h2>
        <p>
          <span className="my-name">Gentiana</span> är en nyfiken, driven och praktiskt lagd frontendutvecklare, 
    en person som bryr sig om struktur, detaljer och upplevelsen. Starkt förmåga att leda team, 
    skapa effektiva aktiviteter och projekt. Jag mår som bäst när jag deltar i ambitiösa grupper 
    med höga gemensamma mål.
  </p>
        
      </div>
    </div>
     )
}

export default About;