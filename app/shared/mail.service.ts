import { HelperService } from './helper.service';
import {Injectable} from "@angular/core";
import "../../libs/smtp.js";

declare let Email: any;

@Injectable()
export class MailService {


    constructor(private helperService: HelperService) {

        
    }
    

    zendMail = (aan: string, onderwerp: string, bericht: string) => {
        
    }

    zendMailNaarWebdes = (van: string, emailVan: string, bericht: string) => {
        
        // if(this.helperService.isLocalhost())
        //     return 0;
        
        alert("send mail");
        Email.send("dennis@webdes.be",
            "dennis@webdes.be",
            "This is a subject",
            "this is the body",
            "smtp.mijnhostingpartner.nl",
            "dennis@webdes.be",
            "Jes_Jin_Mau_24");
    }


}

const EMAILWEBDES: string = "dennis@webdes.be";



