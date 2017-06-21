import { IReferentie, ReferentieService } from '../home/referentie.service';

import * as _ from "lodash";

import {Component, OnInit} from "@angular/core"

@Component ({
    selector: "wd-portfolio",
    templateUrl: "app/portfolio/portfolio.component.html",
    styles: [require("./portfolio.component.scss").toString()]
})
export class PortfolioComponent implements OnInit {
    referenties : Array<IReferentie> =  [];
   
    constructor(private referentieService: ReferentieService) {

        
    }
    
    ngOnInit() {
        let i: number = 0;
        var refs = this.referentieService.getAllReferenties();
        this.referenties = _.map(refs, (ref: IReferentie) =>
        {

            let mod = i % 3;
            ref.animation = "fadeInUp"; 
            ref.delay = mod;
            
            i++;

            return ref;
        });
  
    }

}