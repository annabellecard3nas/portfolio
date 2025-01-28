import './Contacter.scss';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Fab from '@mui/material/Fab';

function Contacter(){
    return(
        <div className="contacter" id="contacter">
        <footer>
          <div className="getInTouch">
            <h2>Get in touch</h2>
            <ul>
              <li><a href="https://www.linkedin.com/in/koya-annabelle-lacombe-cardenas-b42933329/">LinkedIn</a></li>
              <li><a href="https://github.com/annabellecard3nas">GitHub</a></li>
              <li> <a href="mailto:alacombecardenas@gmail.com">alacombecardenas@gmail.com</a></li>
            </ul>
          </div>
          <div className="icons">
            <a href="mailto:alacombecardenas@gmail.com"><Fab size='medium'  aria-label="email"><EmailIcon /></Fab></a>
            <a href="https://www.linkedin.com/in/koya-annabelle-lacombe-cardenas-b42933329/"><Fab size='medium'  aria-label="linkedIn"> <LinkedInIcon /></Fab></a>
            <a href="https://github.com/annabellecard3nas"><Fab size='medium'  aria-label="gitHub"><GitHubIcon /></Fab> </a>
          </div>

          <h1>Annabelle</h1>
          <div className="credit"><p>credit a</p></div>
        </footer>
      </div>
    );
}

export default Contacter;