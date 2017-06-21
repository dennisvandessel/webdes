import { IReferentie } from './referentie.service';


import {Component, Input} from "@angular/core"

@Component ({
    selector: "wd-referentie",
    templateUrl: "app/home/referentie.component.html",
    styles: [require("./referentie.component.scss").toString()]
})
export class ReferentieComponent {
    
    @Input() referentie: IReferentie;

    getReferentieUrl = () => {
        return "http://" + this.referentie.url;
    }

}

