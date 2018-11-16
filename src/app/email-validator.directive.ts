import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';

@Directive({
    selector: '[appValidEmail]',
    providers: [{provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective implements Validator {
    validate(control: AbstractControl): {[key: string]: any} | null {
        return emailValidator()(control);
    }
}

function emailValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const regex = new RegExp(/^[a-z\d\.\-]+@[a-zd\.-]+\.[a-z\d]{2,4}$/, 'i');
        const isValid = regex.test(control.value);
        return !isValid ? {invalidEmail: {value: control.value}} : null;
    };
}
