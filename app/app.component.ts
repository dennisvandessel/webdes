import { BrowserModule, Title }  from '@angular/platform-browser';
import {Component, OnInit} from "@angular/core"
import { Router, NavigationEnd, NavigationStart } from '@angular/router';


@Component ({
    selector: "wd-app",
    templateUrl: "app/app.component.html",
    styles: [require("./app.component.scss").toString()]
})
export class AppComponent {
    

        constructor(private titleService: Title, private router: Router) {
        router.events.forEach((event) => {
            if (event instanceof NavigationEnd) 
            {
                console.log(this.router.routerState.root.snapshot.data);
                this.titleService.setTitle('');
            }
            if (event instanceof NavigationStart) {

                 document.body.scrollTop = 0;
            }
        });
    }



}



