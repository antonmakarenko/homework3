import {AbstractControl, ValidatorFn} from '@angular/forms';

export default function emailValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const regex = new RegExp(/^[a-z\d\.\-_]+@[a-zd\.-_]+\.[a-z\d]{2,4}$/, 'i');
        const isValid = regex.test(control.value);
        return !isValid ? {invalidEmail: {value: control.value}} : null;
    };
}
