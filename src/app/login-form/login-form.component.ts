import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  public credentials = {email: '', password: ''};

  public onSubmit() {
    alert('login successful');
  }
}
