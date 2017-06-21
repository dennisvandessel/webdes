
import {Component, Input} from "@angular/core"

@Component ({
    selector: "wd-pageheader",
    templateUrl: "app/shared/header/pageheader.component.html",
    styles: [require("./pageheader.component.scss").toString()]
})
export class PageheaderComponent {
    @Input() header: string;
   

}