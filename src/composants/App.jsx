import { useState } from 'react';
import './App.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='appli'>
      <div className="topPage">
        {/* menu entete */}
        <header className='entete'>
          <div className="logo">Annabelle</div>
          <div className="menu">
            <ul>
              <li><a href='#'>À propos de moi</a></li>
              <li><a href='#'>Compétences</a></li>
              <li><a href='#'>Projects</a></li>
              <li><a href='#'>Me contacter</a></li>
            </ul>
          </div>
        </header>

      <div className="aPropos">
        {/* a propos de moi et me contacter */}
        <div className="flextoppage">
            <div className="infoAProposDeMoi">
              <h1>Annabelle Lacombe Cardenas</h1>
              <h3>Developpeuse Front-end</h3>
              <div className="descriptionMoi">
                <h5>À propos de moi</h5>
                <p>Je suis une développeuse front-end passionnée par la création de sites </p>
                <button>contactez moi</button>
              </div>
            </div>
            
            <div className="enteteimg">
              <h1>Hi,i'm</h1>
            </div>
        </div>

      </div>  
      </div>

      <div className="competences">
        <h1>Compétences</h1>
        <h2>Voicies certains de mes compétences</h2>

        <div className="cartesComp">
          <div className="cartes">
            <h3>Languages</h3>
            <p>php</p>
          </div>

          <div className="cartes">
            <h3>Languages</h3>
            <p>php</p>
          </div>

          <div className="cartes">
            <h3>Languages</h3>
            <p>php</p>
          </div>
        </div>
      </div>

      <div className="projet">
        <div className="titre">
          <div className="gauche">
          <h1>Mes Projets</h1>
          <h2>Voicies certains de mes projets</h2>
          </div>
        </div>
        <div className="SecCarteProj">
          <div className="carteProj"></div>
        </div>
      </div>

      <div className="contacter">
        <footer>
          <div className="getInTouch">
            <h2>Get in touch</h2>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">alacombecardenas@gmail.com</a></li>
            </ul>
          </div>
          <div className="icons">
            <p>ihi</p>
          </div>

          <h1>Annabelle</h1>
          <div className="credit"><p>credit a</p></div>
        </footer>
      </div>
    </div>
  )
}

export default App
