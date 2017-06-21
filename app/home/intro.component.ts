
import {Component, OnInit} from "@angular/core"

import {Router} from "@angular/router"


import {Observable} from 'rxjs/Rx';

@Component ({
    selector: "wd-intro",
    templateUrl: "app/home/intro.component.html",
    styles: [require("./intro.component.scss").toString()]
})
export class IntroComponent implements OnInit {

    introSettings : Array<IIntroSettings> = [
        {label: "gebruiksvriendelijke", classWordStart: true, classWordStop: false}, 
        {label: "betaalbare", classWordStart: false, classWordStop: false},     
        {label: "professionele", classWordStart: false, classWordStop: false}
    ];

    constructor(private router: Router) {

        
    }

    ngOnInit() {
        let timer = Observable.timer(2000,2000);
        timer.subscribe(t => {
            this.setIntroTimeout(t);    
        })
    }

    setIntroTimeout = (t: number) => {
        let index = t % 3;
        //stop current
        let stop: number = index;
        this.introSettings[stop].classWordStop = true;
        //start next 
        let start: number = (index + 1 === this.introSettings.length) ? 0 : index + 1;
        this.introSettings[start].classWordStart = true; 
        //hide others
        for (let i: number = 0; i < this.introSettings.length; i++){
            if (i !== stop && i!== start) {
                this.introSettings[i].classWordStart = false;
                this.introSettings[i].classWordStop = false;
            }
        }
    }

    gotoContact = () => {
        this.router.navigate(["/contact"]);
    }

}

export interface IIntroSettings {
    label: string;
    classWordStart: boolean;
    classWordStop: boolean;
}