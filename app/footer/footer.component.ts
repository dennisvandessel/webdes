import { IMenuitem, MenuService } from '../header/menu.service';


import {Component, OnInit} from "@angular/core"

@Component ({
    selector: "wd-footer",
    templateUrl: "app/footer/footer.component.html",
    styles: [require("./footer.component.scss").toString()]
})
export class FooterComponent implements OnInit {
    
    constructor(private menuService: MenuService) {
        
        
    }
    menuitems: Array <IMenuitem>;

    ngOnInit() {
        this.menuitems = this.menuService.getMenu();
    }



}