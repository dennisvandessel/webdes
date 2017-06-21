import { IMenuitem } from './menu.service';


import { Component, Input } from '@angular/core';


@Component ({
    selector: "wd-menu",
    templateUrl: "app/header/menu.component.html",
    styles: [require("./menu.component.scss").toString()]
})
export class MenuComponent {

    @Input() menuitems : Array<IMenuitem>= [];
    
    
}
