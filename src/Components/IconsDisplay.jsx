import React from 'react';
import htmlIcon from '../assets/html5.svg';
import cssIcon from '../assets/css3.svg';
import sassIcon from '../assets/sass.svg';
import javascriptIcon from '../assets/javascript.svg';
import reactIcon from '../assets/react.svg';
import nodeIcon from '../assets/nodedotjs.svg';
import githubIcon from '../assets/github.svg';
import './IconsDisplay.css';

function IconDisplay() {
  return (
    <div className="icon-container">
      <img src={htmlIcon} alt="HTML5" className="icon" />
      <img src={cssIcon} alt="CSS3" className="icon" />
      <img src={sassIcon} alt="Sass" className="icon" />
      <img src={javascriptIcon} alt="JavaScript" className="icon" />
      <img src={reactIcon} alt="React" className="icon" />
      <img src={nodeIcon} alt="Node.js" className="icon" />
      <img src={githubIcon} alt="GitHub" className="icon" />
    </div>
  );
}

export default IconDisplay;
