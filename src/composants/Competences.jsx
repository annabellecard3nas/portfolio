import "./Competences.scss";
import competencesData from './data/competences.json'


export default function Competences() {
    
    return(
        <div className="competences" id="competence">
        <h1>Compétences</h1>
        <h2>Voici certaines de mes compétences.</h2>

        <div className="cartesComp">
        {/* competencesData= importe le fichier json qui a un array d'objets qui 
        represente chacun une section de competences 
        et chacun a un titre et un autre array "items"/les skill */}
        {/* index est la position courante de l'item dans le array */}
        {competencesData.map((competence, index) => (
              <div className="cartes" key={index}>
                <h3>{competence.titre}</h3>

                {/* ici je map chaque "skill" dans la section item de mon json */}
                {competence.items.map((item, idx) => (<p key={idx}>  {item} </p>))}
              </div>
        ))}
        </div>
           
      </div>
    );
}

