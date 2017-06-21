import {Injectable} from "@angular/core";
import * as _ from "lodash";

@Injectable()
export class ReferentieService {

    getAllReferenties = ():Array<IReferentie> => {
        return REFS;
    }

    getHomeReferenties = ():Array<IReferentie> => {
        let homerefs = _.filter(REFS, {home: true});
        return _.take(homerefs, 3);
    }

}



const REFS: Array<IReferentie> = [
     {name: "WEBDES", place: "Burcht", info: "ontwerpen van websites", url: "www.webdes.be", image: "../../img/referenties/webdes.png", imageText: "website webdes - ontwerpen van websites", home: true},
    {name: "J'estetique", place: "Burcht", info: "Schoonheidsspecialiste", url: "www.jestetique.be", image: "../../img/referenties/jestetique.png", imageText: "website schoonheidsspecilaiste J'estetique in Burcht", home: true}, 
];


export interface IReferentie {
    name: string;
    place: string;
    info: string;
    image: string;
    imageText: string;
    url: string;
    home?: boolean;
    animation?: string;
    delay?: number;
}