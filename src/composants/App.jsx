import { useState } from 'react';
import './App.scss';
import Competences from "./Competences";
import Projets from './Projets';
import Contacter from './Contacter';
import Apropos from './Apropos';

function App() {

  return (
    <div className='appli'>
      <div className="topPage">
        {/* menu entete */}
        <header className='entete'>
          <div className="logo">Annabelle</div>
          <div className="menu">
            <ul>
              <li><a href='#aPropos'>À propos de moi</a></li>
              <li><a href='#competence'>Compétences</a></li>
              <li><a href='#projets'>Projects</a></li>
              <li><a href='#contacter'>Me contacter</a></li>
            </ul>
          </div>
        </header>
        <Apropos />
       </div>
      
      <Competences />
      <Projets />
      <Contacter />
      
    </div>
  );
}

export default App
