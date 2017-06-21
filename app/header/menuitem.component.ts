import { IMenuitem } from './menu.service';

import {Component, Input} from "@angular/core"

@Component ({
    selector: "wd-menuitem",
    templateUrl: "app/header/menuitem.component.html",
    styles: [require("./menuitem.component.scss").toString()]
})
export class MenuitemComponent {
    @Input() menuitem: IMenuitem;

}
