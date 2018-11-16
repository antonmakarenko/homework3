import { Component } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import emailValidator from '../email-validator.function';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
})
export class SignupFormComponent {
  public f = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, emailValidator()]),
    passwords: new FormGroup(
        {
          password: new FormControl('', {validators: [Validators.required], updateOn: 'blur'}),
          passwordRepeat: new FormControl('', [Validators.required]),
        },
        {asyncValidators: this._asyncValidatorEquals}
    )
  });

  private makeSnow(value: string) {
    const regex = new RegExp(/^jon$/, 'i');
    if (regex.test(value)) {
      this.f.patchValue({lastName: 'Snow', email: 'jon_snow@example.com'});
      this.f.controls.lastName.markAsDirty();
      this.f.controls.email.markAsDirty();
    }
  }

  private _asyncValidatorEquals({ value }: FormGroup): Observable<ValidationErrors|null> {
    const [passKey, repeatKey] = Object.keys(value);
    const result = value[passKey] === value[repeatKey] ? null : { notEqual: true };
      console.log(value, result);
    return of<ValidationErrors|null>(result).pipe(delay(2000));
  }

  public submit() {
    alert('Very good ( ͡° ͜ʖ ͡°)');
  }
}
