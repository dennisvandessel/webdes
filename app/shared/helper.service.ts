import {Injectable} from "@angular/core";

@Injectable()
export class HelperService {

    

    isLocalhost = ():boolean => {
        return window.location.hostname.toUpperCase() === LOCALHOST
    }

   


}

const LOCALHOST: string = "LOCALHOST";



