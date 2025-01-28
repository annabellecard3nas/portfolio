
import "./Projets.scss";
import Unprojet from "./Unprojet";
import LesProjets from "./data/Projet.json"

function Projets() {

  return (
    <div className="projet" id="projets">
        <div className="titre">
        <div className="gauche">
        <h1>Mes Projets</h1>
        <h2>Voicies certains de mes projets</h2>
        </div>
        </div>
        <div className="SecCarteProj">
            
              {LesProjets.map(proj=> <Unprojet
              key={proj.id}
              nom={proj.nom}
              description={proj.description}
              />)}

        </div>
    </div>
  );
}

export default Projets;
