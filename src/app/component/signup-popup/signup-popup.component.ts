import { Component, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-signup-popup',
  templateUrl: './signup-popup.component.html',
  styleUrls: ['./signup-popup.component.scss'],
  providers: [{
    provide:NG_VALUE_ACCESSOR,
    useExisting: SignupPopupComponent,
    multi: true
  }]
})
export class SignupPopupComponent  implements OnInit,ControlValueAccessor {

  @ViewChild(IonModal) modal!: IonModal;

  email!:string;
  pass!:string;
  signupForm!: FormGroup;

  onChange!: (value:any) => void;
  onTouched!: () => void;
  
  constructor(
    private formBuilder: FormBuilder,
  ) { }
  writeValue(obj: any): void {
    console.log(obj)
    // throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    this.onChange=fn;
    // throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    this.onTouched=fn;
    // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.signupForm=this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit(){
  this.onChange(this.signupForm)  
  if(this.signupForm){
    this.modal.dismiss(null, 'cancel');
  }
  }

  dismissModal(){
    this.modal.dismiss(null, 'cancel');
  }
}
