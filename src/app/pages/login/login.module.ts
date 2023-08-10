import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { RememberMeComponent } from 'src/app/component/remember-me/remember-me.component';
import { SignupPopupComponent } from 'src/app/component/signup-popup/signup-popup.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LoginPageRoutingModule,

  ],
  declarations: [LoginPage,RememberMeComponent,SignupPopupComponent]
})
export class LoginPageModule {}
