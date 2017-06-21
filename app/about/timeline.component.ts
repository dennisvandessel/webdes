import { ITimeitem } from './timeitem.component';

import {Component} from "@angular/core";
import * as moment from "moment";
import * as _ from "lodash";

@Component ({
    selector: "wd-timeline",
    templateUrl: "app/about/timeline.component.html",
    styles: [require("./timeline.component.scss").toString()]
})
export class Timeline {
    

    private timeitems: Array<ITimeitem> = [
        {start: 2017, name: "WEBDES", title: "ontwikkelaar", info: "Ontwerpen van websites."},
        {start: 2016, name: "SD Worx", title: "ontwikkelaar", info: "Ontwikkelen van een web toepassing voor de loonberekening van grote ondernemmingen."},
        {start: 2009, stop: 2016,  name: "Digipolis", title: "ontwikkelaar", info: "Ontwikkelen van web toepassingen voor Stad Antwerpen."},
        {start: 2004, stop: 2009,  name: "Freelancer", title: "ontwikkelaar", info: "Ontwikkelen van desktop toepassingen in de fincaniële sector voor o.a. Delta Lloyd Bank en Sopra Group. Ontwerp van websites voor enkele KMO's."},
         {start: 2000, stop: 2004,  name: "Info Support", title: "consultant", info: "Ontwikkelen van desktop toepassingen als consultant voor o.a. Delta Nutsbedrijven en De Post."},
        {start: 1997, stop: 2000,  name: "Studies", title: "student", info: "Toegepaste Inforamtica aan de Karel de Grote hogeschool in Antwerpen", last: true}
    ];



  

}

