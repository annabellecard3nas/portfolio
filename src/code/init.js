import objetConfig from './config';
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

//initialiser les services de firebase (creer une reference a une appli)
export const app = initializeApp(objetConfig);

//initialiser le fireStore
export const bd= getFirestore(app);

//racourcie pour les collection  utiliser 
export const mesProjets="MesProjets";