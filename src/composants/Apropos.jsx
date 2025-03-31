import './Apropos.scss';

function Apropos(){
    return(
      <div className="aPropos" id="aPropos">
        {/* a propos de moi et me contacter */}
        <div className="flextoppage">

            <div className="infoAProposDeMoi">

            <div className="carre">
              <div className="minicarrelL"></div>
            </div>

              <h1>Annabelle Lacombe Cardenas</h1>
              <h3>Développeuse Front-end</h3>
              <div className="descriptionMoi">
                <h5>À propos de moi</h5>
                <p>Je suis une développeuse front-end passionnée par la création de sites </p>
                <a href="mailto:alacombecardenas@gmail.com"><button>contactez moi</button></a>
              </div>

              <div className="carreD"> 
              <div className="minicarreD"></div>
            </div>
            </div>
           
            

            <div className="enteteimg">
              <h1>Bonjour,</h1>
              <h3>je suis</h3>
            </div>
        </div>

      </div>  
      
    );
}

export default Apropos;