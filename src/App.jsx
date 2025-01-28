import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Pages/Home';
import Bio from './Pages/Bio';
import Contact from './Pages/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer'
import maPhoto from './assets/dewaegeneire_dev_frontend.jpeg';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/bio" 
            element={
              <Bio 
                image={maPhoto}
                title="À propos"
                description="Après 10 ans d'expérience dans la communication web (en ambassade puis pour un e-commerce), j'ai décidé de me reconvertir dans le développement informatique. Diplômée d’un Master en Communication et Culture de Sciences Po Toulouse et certifiée Intégratrice Web par OpenClassrooms, j'allie mon expertise en communication digitale et mes compétences de développeuse front-end pour traduire les besoins des clients en solutions web sur mesure. Basée à Copenhague et passionnée par la photographie et le design, j'ai pour objectif de créer des interfaces dynamiques, esthétiques et intuitives, offrant à l'utilisateur une expérience agréable et fluide."
              />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App