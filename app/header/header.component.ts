import { IOnInViewportChangeEvent } from '../modules/inview/in-viewport.directive';

import {Component } from '@angular/core';


@Component ({
    selector: "wd-header",
    templateUrl: "app/header/header.component.html",
    styles: [require("./header.component.scss").toString()]
})
export class HeaderComponent {

    showFixedHeader: boolean = false;





    onInViewportChange(eventInfo: IOnInViewportChangeEvent) {
        setTimeout(() => {
            this.showFixedHeader = !eventInfo.invp;
       
        }
        , 0);
       
  }


}