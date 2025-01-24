
import "./Projets.scss";
import Projet from "./Projet";

function Projets({ mesProjets }) {

  return (
    <div className="projet" id="projets">
        <div className="titre">
        <div className="gauche">
        <h1>Mes Projets</h1>
        <h2>Voicies certains de mes projets</h2>
        </div>
        </div>
        <div className="SecCarteProj">
        <div className="carteProj">
            <div className="desCarte">
              {
                MesProjets.map(proj => <Projet
                
                                        />)
              }
            </div>
        </div>
        </div>
    </div>
  );
}

export default Projets;
