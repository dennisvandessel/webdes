import { HeadermenuComponent } from './header/headermenu.component';
import { InViewportModule } from './modules/inview/in-viewport.module';
import { PageheaderComponent } from './shared/header/pageheader.component';
import { HelperService } from './shared/helper.service';
import { FormsModule } from '@angular/forms';
import { MailService } from './shared/mail.service';
import { MenuService } from './header/menu.service';
import { ReferentieService } from './home/referentie.service';
import { FormulierComponent } from './contact/formulier.component';
import { FollowComponent } from './contact/follow.component';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { WerkwijzeComponent } from './werkwijze/werkwijze.component';
import { PrijzenComponent } from './prijzen/prijzen.component';
import { ContactComponent } from './contact/contact.component';
import { Timeitem } from './about/timeitem.component';
import { Timeline } from './about/timeline.component';

import { appRoutes} from './config/routes';
import {PathLocationStrategy, LocationStrategy} from '@angular/common';

import { RouterModule } from '@angular/router';
import { WebdesComponent } from './footer/webdes.component';
import { ReferentiesComponent } from './home/referenties.component';
import {HeadlinesComponent } from './home/headlines.component';
import {NgModule} from "@angular/core";
import { BrowserModule, Title } from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {MenuComponent} from "./header/menu.component";
import {MenuitemComponent} from "./header/menuitem.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {FooterComponent} from "./footer/footer.component";
import {HeadlineComponent} from "./home/headline.component";
import {ReferentieComponent} from "./home/referentie.component";
import {IntroComponent} from "./home/intro.component";

@NgModule (
    {
        imports: [
            BrowserModule,
            FormsModule,
            RouterModule.forRoot(appRoutes, { useHash: true }),
            InViewportModule.forRoot()
            
            ],
        declarations: [
            AppComponent, 
            HeaderComponent, 
            MenuComponent, 
            MenuitemComponent,
            FooterComponent, 
            HomeComponent, 
            AboutComponent,
            HeadlineComponent,
            ReferentieComponent,
            IntroComponent,
            HeadlinesComponent,
            ReferentiesComponent,
            WebdesComponent, 
            Timeline,
            Timeitem,
            ContactComponent,
            PrijzenComponent,
            WerkwijzeComponent,
            PortfolioComponent,
            FollowComponent,
            FormulierComponent, 
            PageheaderComponent,
            HeadermenuComponent
            ],
        providers: [
            Title,
            MenuService,
            ReferentieService,
            MailService,
            HelperService
            ],
        bootstrap: [AppComponent]
    }
)
export class AppModule {

}