import './Unprojet.scss';

function Unprojet({nom,description}){
    return(
        <div className='Unprojet'>
            <div className="secDesc">
            <h1>{nom}</h1>
            <p>{description}</p>
            </div>
        </div>
    );
}

export default Unprojet;