import { ContactComponent } from '../contact/contact.component';
import { WerkwijzeComponent } from '../werkwijze/werkwijze.component';
import { PrijzenComponent } from '../prijzen/prijzen.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import {Routes} from "@angular/Router";

export const appRoutes:Routes = [
    {path: "home", component: HomeComponent, data: {title: 'WEBDESign - gebruiksvriendelijke en betaalbare websites'}},
    {path: "portfolio", component: PortfolioComponent, data: {title: 'portfolio webdes'}},

    {path: "prijzen", component: PrijzenComponent, data: {title: 'prijzen webdes'}},
    {path: "werkwijze", component: WerkwijzeComponent, data: {title: 'werkwijze webdes'}},

    {path: "contact", component: ContactComponent, data: {title: 'contact webdes Burcht'}},
    {path: "about", component: AboutComponent, data: {title: 'over webdes'}},
    {path: "", redirectTo: "/home", pathMatch:"full"}
];