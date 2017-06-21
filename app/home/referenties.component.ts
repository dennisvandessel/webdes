import { IReferentie, ReferentieService } from './referentie.service';

import * as _ from "lodash";

import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component ({
    selector: "wd-referenties",
    templateUrl: "app/home/referenties.component.html",
    styles: [require("./referenties.component.scss").toString()]
})
export class ReferentiesComponent implements OnInit {

    referenties: Array<IReferentie> = [];

    constructor(private referentieService: ReferentieService, private router: Router) {

        
    }
    
    ngOnInit() {
        this.referenties = this.referentieService.getHomeReferenties();
        
        this.referenties = _.take(this.referenties,3);
        this.referenties[0].animation = "";
        this.referenties[1].animation = "";
        //this.referenties[2].animation = "";
    }

    gotoPortfolio = () => {
        this.router.navigate(["/portfolio"]);
    }



}