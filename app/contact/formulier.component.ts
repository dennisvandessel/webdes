import { NgControl, NgForm } from '@angular/forms/src/directives';
import { MailService } from '../shared/mail.service';

import {Component} from "@angular/core"

@Component ({
    selector: "wd-formulier",
    templateUrl: "app/contact/formulier.component.html",
    styles: [require("./formulier.component.scss").toString()]
})
export class FormulierComponent {
    aanspreking: string = "";
    toonErrorMelding: boolean = false;
    formIsVerzonden: boolean = false;

    constructor(private mailService: MailService) {
      
        
    }

    verzenden = (form: NgForm) => {
        this.toonErrorMelding = false;
        if (!form.valid)
        {
            this.toonErrorMelding = true;
            return 0;
        }

        var formValue = form.value;        
        this.aanspreking = formValue.naam;
        console.log(formValue);
        this.mailService.zendMailNaarWebdes(formValue.naam, formValue.email, formValue.bericht);
        this.formIsVerzonden = true;
        document.body.scrollTop = 0;
    }

    toonLabelError = (input: NgControl):boolean => {
        if (input) {
            if (input.invalid)
            {
                if (input.touched || this.toonErrorMelding)
                    return true;
            }
        }
        return false;

    }
    toonAlgemeneError = (form: NgForm): boolean => {
        if (form) {
             if(form.valid)
             {
                 this.toonErrorMelding = false;
                 return false;
             } 
             else{
                 if (this.toonErrorMelding)
                    return true;
             }
        }
        return false;
    }

}