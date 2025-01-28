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
              <h3>Developpeuse Front-end</h3>
              <div className="descriptionMoi">
                <h5>À propos de moi</h5>
                <p>Je suis une développeuse front-end passionnée par la création de sites </p>
                <button>contactez moi</button>
              </div>

              <div className="carreD"> 
              <div className="minicarreD"></div>
            </div>
            </div>
           
            

            <div className="enteteimg">
              <h1>Hi,i'm</h1>
            </div>
        </div>

      </div>  
      
    );
}

export default Apropos;