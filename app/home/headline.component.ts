import { createRouterState } from '@angular/router/src/create_router_state';

import {Component, Input, OnInit} from "@angular/core"

@Component ({
    selector: "wd-headline",
    templateUrl: "app/home/headline.component.html",
    styles: [require("./headline.component.scss").toString()]
})
export class HeadlineComponent implements OnInit {
    
    @Input() titel: string;
    @Input() image: string;
    @Input() imagetext: string;
    @Input() animation: string;



    ngOnInit() {
        this.image = "../../img/" + this.image;
    }

   
}



    



 