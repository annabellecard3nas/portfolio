import './Unprojet.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Unprojet({nom,description, image, url}){
    return(
        <div className='Unprojet'  style={{ backgroundImage: `url(${image})` }}>
            <div className="secDesc"  >
                <h2>{nom}</h2>
                <p>{description}</p>
                <a href={url} target="_blank" rel="noopener noreferrer">Voir le projet<ArrowForwardIosIcon/></a>
            </div>
        </div>
    );
}

export default Unprojet;