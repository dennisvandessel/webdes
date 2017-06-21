//this is webpack start point => compiled to dist folder

/// <reference path="../typings/alltypings.ts" />

//external libs
import "jquery";

import "bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";


//libs for angular 2
import "../node_modules/core-js/client/shim.min.js";
import "../node_modules/zone.js/dist/zone.js";


//bootstrap angular app
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";

//general css: onderaan zetten zodat hier de bovenstaande css (zoals bootstrap overschreven wordt)
import "../styles/site.scss";



platformBrowserDynamic().bootstrapModule(AppModule);

