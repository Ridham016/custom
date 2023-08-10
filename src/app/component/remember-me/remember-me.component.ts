import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-remember-me',
  templateUrl: './remember-me.component.html',
  styleUrls: ['./remember-me.component.scss'],
  providers: [{
    provide:NG_VALUE_ACCESSOR,
    useExisting: RememberMeComponent,
    multi: true
  }]
})
export class RememberMeComponent  implements OnInit, ControlValueAccessor {

  data:any
  value = false;
  onChange!: (value: any) => void;
  onTouched!: () => void;

  constructor() { }

  writeValue(obj: any): void {
    console.log(obj)
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange=fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched=fn;

  }

  setDisabledState?(isDisabled: boolean): void {

  }

  ngOnInit() {
  }

  onClick(){
    console.log(this.data)
    this.value=!this.value;
    if(this.data){
      let val={
        rememberME:this.value,
        signupFormData:this.data.value
      }
     
      this.onChange(val)
    }
    else{
      let val={
        rememberME:this.value
      }
      this.onChange(val)
      }
    this.onTouched();
  }
}
