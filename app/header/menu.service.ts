import {Injectable} from "@angular/core";

@Injectable()
export class MenuService {

    getMenu = ():Array<IMenuitem> => {
        return MENU;
    }


}



const MENU: Array<IMenuitem> = [
    {label: "Home", path: "/home"},
    {label: "Werkwijze", path: "/werkwijze"},
    {label: "Prijzen", path: "/prijzen"},
    {label: "Portfolio", path: "/portfolio"},
    {label: "Over mij", path: "/about"},
    {label: "Contact", path: "/contact"}
];


export interface IMenuitem {
    label : string;
    path: string;
}

