
import {Component, Input} from "@angular/core"

@Component ({
    selector: "wd-timeitem",
    templateUrl: "app/about/timeitem.component.html",
    styles: [require("./timeitem.component.scss").toString()]
})
export class Timeitem {
    @Input() item: ITimeitem;
   
    showPeriod = (): string => {

        return String(this.item.start) + " - " + (this.item.stop != undefined ? String(this.item.stop) : "heden");
    };
    
}

export interface ITimeitem {
    start: number;
    stop?: number;
    name: string;
    title: string;
    info: string;
    last?: boolean;
}