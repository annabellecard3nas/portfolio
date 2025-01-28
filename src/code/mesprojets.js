import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { bd, mesProjets } from "./init";


export async function lireTout(){
    const leMenu = await getDocs(query(collection(bd,mesProjets)));
    return leMenu.docs.map(doc=> doc.data());
}

