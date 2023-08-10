import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-custom-searchbar',
  templateUrl: './custom-searchbar.component.html',
  styleUrls: ['./custom-searchbar.component.scss'],
})
export class CustomSearchbarComponent  implements OnInit {
  @Input() public data:any
  @Input() public selectallChecked:any
  @Output() valueEvent=new EventEmitter<boolean>();

results:any
  
  constructor(  
  ) {
   
   }

  ngOnInit() {
    console.log('Componenet log data',this.data)
    console.log('Componenet log flag',this.selectallChecked)
    this.results=[...this.data];
  }

  handleChange(ev:any){
    const searchTerm = ev.detail.value.toLowerCase();
    this.results = this.data.filter((item :any ) => { const matchesSearch = item.name.toLowerCase().includes(searchTerm); return matchesSearch});
  }

  toogleChecked(item:any){
    console.log(item)
  
    this.data.forEach((element:any) => {
      if(element.name===item.name){
        element.isChecked=item.isChecked;
      }
    });
    console.log(this.results)
  }
  selectAll(ev:any){

    const changed=ev.detail.checked;
    this.valueEvent.emit(changed);
    this.data.forEach((element:any) => {
      element.isChecked=changed
    });
    console.log(this.selectallChecked)
    console.log(this.results)
  }
  
  reset(){
    const searchTerm = '';
    this.results = this.data.filter((item: any) => { const matchesSearch = item.name.toLowerCase().includes(searchTerm); return matchesSearch});
  }
 
}
