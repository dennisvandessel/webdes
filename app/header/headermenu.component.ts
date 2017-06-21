import { IMenuitem, MenuService } from './menu.service';

import {Component, OnInit} from "@angular/core";
import { Router, NavigationStart } from '@angular/router';

@Component ({
    selector: "wd-headermenu",
    templateUrl: "app/header/headermenu.component.html",
    styles: [require("./headermenu.component.scss").toString()]
})
export class HeadermenuComponent {
    showMenu: boolean = false;
    menuitems : Array<IMenuitem>= [];
    
    constructor(private menuService: MenuService, private router: Router) {
        router.events.forEach((event) => {
            if (event instanceof NavigationStart) {
                this.showMenu = false;
            }
        });
    }

    ngOnInit() {
         this.menuitems = this.menuService.getMenu();

    }   

   toggleMenu = () => {
        this.showMenu = !this.showMenu;
   } 
   


 
    
}