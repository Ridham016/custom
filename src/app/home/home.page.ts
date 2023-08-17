import { Component, Injector } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SelectAllPlusSearchComponent } from '../component/select-all-plus-search/select-all-plus-search.component';
import { createCustomElement } from '@angular/elements';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  baseUrl='https://reqres.in/api/';
  pageNumber=1;
  data:any[]=[];
  disable:boolean=false;
selectedValues: any;

  constructor(
    private http:HttpClient,
    private injector: Injector
  ) {
    const element = createCustomElement(SelectAllPlusSearchComponent, {
      injector: this.injector,
    });
    customElements.define(`c-select-all-plus-search`, element);
    console.log(element)
  }

  ionViewDidEnter(){
    this.getData(this.pageNumber)

  }

  ionViewWillEnter(){
    this.pageNumber=1;
  }

  getData(pg:number){
    if(pg<=2){
      this.http.get(`${this.baseUrl}users?page=${pg}`).subscribe(
        (response:any)=>{
          let user_data=response.data;
          // user_data=user_data.data;
          this.data.push(...user_data);
          // console.log(user_data)
          console.log(this.data)
        },
        error=>{
          console.log(error)
        }
      )
    }
    else{
      alert('no Data to fetch');
      this.disable=true;
    }
  }

  loadMore(){
    this.pageNumber=this.pageNumber+1
    this.getData(this.pageNumber);
    console.log(this.pageNumber)
  }
}
