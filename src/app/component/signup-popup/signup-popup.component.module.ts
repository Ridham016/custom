import { IonicModule } from '@ionic/angular';

import { NgModule } from '@angular/core';
import { SignupPopupComponent } from './signup-popup.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    SignupPopupComponent,
    IonicModule
],
  declarations: [SignupPopupComponent]
})

export class ComponentModule {}
