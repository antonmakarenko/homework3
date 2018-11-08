import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginFormComponent,
    },
    {
        path: 'password-recovery',
        outlet: 'primary',
        component: ForgotPasswordComponent,
    },
    {
        path: 'signup',
        component: SignupFormComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
