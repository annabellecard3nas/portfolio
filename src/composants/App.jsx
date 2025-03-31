import { useEffect, useState } from 'react';
import './App.scss';
import Competences from "./Competences";
import Projets from './Projets';
import Contacter from './Contacter';
import Apropos from './Apropos';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from "@mui/icons-material/Close";

function App() {
  const [projets, setProjets] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Empêcher ou réactiver le scroll selon l'état du menu
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'; // Désactiver le scroll
    } else {
      document.body.style.overflow = 'auto'; // Réactiver le scroll
    }
  }, [menuOpen]);

  return (
    <div className='appli'>
      <div className="topPage">
        {/* menu entete */}
        <header className='entete'>
          <div className="logo">Annabelle</div>
          <div className={`menu ${menuOpen ? "open" : ""}`}>
            {/* Button burger visible seulement si la largeur est <= 992px */}
            <button onClick={toggleMenu}>
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
            <ul>
              <li><a href='#aPropos'>À propos de moi</a></li>
              <li><a href='#competence'>Compétences</a></li>
              <li><a href='#projets'>Projets</a></li>
              <li><a href='#contacter'>Me contacter</a></li>
            </ul>
          </div>
        </header>
        <Apropos />
      </div>
      <Competences />
      <Projets projets={projets} />
      <Contacter />
    </div>
  );
}

export default App;
