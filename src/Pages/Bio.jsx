import React from 'react';
import './Bio.css';
import '../Components/Footer';

function Bio({ image, title, description }) {
  return (
    <div className="bio-container">
      {/* Partie photo et texte */}
      <div className="bio-main-content">
        <div className="bio-image">
          <img src={image} alt="Dewaegeneire_développeuse_web" />
        </div>
        <div className="bio-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      {/* Partie formation et compétences */}
      <div className="bio-skills">
        <div className="bio-skills-section">
          <div className="skills-description">
            <h4>INTÉGRATRICE WEB CERTIFIÉE</h4>
            <p>La formation dictée par <a href="https://openclassrooms.com/fr/paths/900-integrateur-web" target="_blank" rel="noopener noreferrer" title="Intégrateur web OpenClassrooms">OpenClassrooms</a> permet de maîtriser le développement d'interfaces web, que ce soit pour convertir des maquettes en <span className="bold-text">sites responsives</span> ou encore créer des <span className="bold-text">applications dynamiques avec React</span>. Des compétences solides en <span className="bold-text">front-end</span> (HTML, CSS, JavaScript) sont acquises, ainsi que des connaissances en optimisation des performances et de la visibilité (SEO, accessibilité). Enfin, la <span className="bold-text">gestion agile de projets web</span> est étudiée en détail, de la conception du site jusqu'à sa mise en ligne.
            </p>
          </div>
          <div className="skills-list">
            <h4>COMPÉTENCES</h4>
            <ul>
              <li><span className="highlight-text">✅ HTML5 & CSS3</span> : Création de sites web modernes et responsives.</li>
              <li><span className="highlight-text">✅ JavaScript, React & Node.js</span> : Approche dynamique du développement pour créer des interfaces modulaires, qui facilitent la maintenance et la réutilisation du code.</li>
              <li><span className="highlight-text">✅ SEO</span> : Optimisation du référencement pour améliorer la visibilité sur les moteurs de recherche.</li>
              <li><span className="highlight-text">✅ Accessibilité Web</span> : Prise en compte des normes d'accessibilité dans le processus de développement.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
