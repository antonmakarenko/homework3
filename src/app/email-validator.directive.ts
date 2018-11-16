import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import emailValidator from './email-validator.function';

@Directive({
    selector: '[appValidEmail]',
    providers: [{provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective implements Validator {
    validate(control: AbstractControl): {[key: string]: any} | null {
        return emailValidator()(control);
    }
}


