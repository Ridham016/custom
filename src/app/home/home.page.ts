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
  searchData:any;
  sdall:any
 dumpData=["Parujan", "Achhavani", "Agasi", "Alipore", "Amadhara", "Ambach(Chikhli)", "Bahej", "Balvada", "Bamanvel", "Bodvank", "Chapaldhara", "Chari", "Chasa", "Chikhli", "Debarpada", "Degam", "Dhamdhuma", "Dholumber  (Chikhli)", "Digendranagar", "Donja", "Fadvel", "Gauri", "Ghej", "Ghodvani", "Gholar", "Godthalbo", "Harangam", "Jamanpada", "Jogvad", "Kakadvel", "Kakadveri", "Kaliari", "Kalvach", "Kanbhai", "Kangvai", "Khambhda", "Kharoli", "Khergam", "Khudvel", "Khundh", "Kukeri", "Majigam", "Maliadhara", "Mandavkhadak", "Manekpore(Chikhli)", "Minkachha", "Mogravadi", "Nandhai", "Naranpore", "Nogama", "Ond", "Panaj", "Panikhadak", "Patibo", "Pipalgabhan", "Rankuva", "Ranverikalla", "Ranverikhurd", "Rethvania", "Rumla", "Ruzvani", "Sadadvel", "Sadakpore", "Samroli", "Saraiya", "Sarvani", "Siyada", "Soldhara", "Sukhabari", "Surkhai", "Suthvad", "Talavchora", "Tankal", "Tejlav", "Thala", "Toranvera", "Vad", "Vandervela", "Vankal (Chikhli)", "Vanzana", "Vav", "Velanpore", "Zari(Chikhli)", "Ajarai", "Amalsad", "Ambheta", "Ancheli", "Antalia", "Bhatfalia", "Bhatha", "Bigri", "Bilimora", "Bilimora RS", "Chapar", "Devdha", "Devsar", "Dhamdachha", "Dhanori(Gandevi)", "Dholai Falia", "Duwada", "Endhal", "Gadat", "Gandeva", "Gandevi", "Ichhapore", "Kachholi", "Kalamtha", "Kesli", "Khakhvada", "Khaparia B0", "Khaparvada", "Kharel", "Khergam(Gandevi)", "Kolva", "Kotha", "Lusvada", "Machhia Vasan", "Manekpore(Gadat)", "Masa", "Mendhar", "Mohanpur", "Movasa Falia", "Nandarkha", "Pati(Gandevi)", "Salej", "Sonvadi", "Sugar Factory", "Taliarabo", "Torangam", "Undach Luhar  Falia", "Undach Vania Falia", "Vaghabari", "Vaghrej", "Valoti", "Vasan(Gandevi)", "Vegam", "Aat", "Abrama", "Arak Sisodra", "Asna", "Avada Falia", "Bhinar", "Bodali", "Bori Falia", "Borsi", "Chijgam", "Chokhad", "Dabhel", "Dambher", "Dandi", "Danti", "Delvada Vadoli", "Dhaman", "Dipla Falia", "Eru Ac", "Eru", "Hansapore", "Jalalpore", "Kadoli", "Kalakachha", "Kalthan", "Kanera", "Karadi", "Kharsad", "Kothmadi", "Krishanapur", "Kuched", "Machhad", "Magob Bhatha", "Mandir", "Manekpore Tankoli", "Mangrol", "Maroli", "Maroli Bazar", "Matvad", "Mirzapore", "Motikaarod", "Motikakrad", "Onjal", "Onjal Machhivad", "Panar", "Pethan", "Ponsra", "Samapur", "Sandalpore", "Sarav", "Simalgam", "Simlak", "Sultanpur", "Tavdi", "Umbharat", "Vedchha", "Vesma", "Chhinam", "Adada", "Amadpore", "Ambada", "Amli Kasba", "Astagam", "Bhattai", "Chandravasansupa", "Chhapra", "Chovisi", "Dabhlai", "Gurukulsupa", "Italva", "Jamalpore", "Junathana", "Kabilpore", "Kaliawadi", "Kasbapar", "Khadsupa", "Khadsupa Boarding", "Khergam (Ugat)", "Kumbhar Falia", "Kurel", "Mahudi", "Malesar", "Mogar", "Moldhara", "Munsad", "Nagdhara", "Navsari", "Padgha", "Parthan", "Pera", "Pinsad", "Sadlav", "Sagra", "Sarpore Pardi", "Satem", "Sisodra", "Supakurel", "Tarsadi", "Toli", "Ugat", "Vejalpore", "Viraval", "Ambabari", "Ambapani", "Bartad", "Bhinar", "Boriach", "Charanvada", "Chondha", "Chorvani", "Dharampuri", "Dholumber", "Doldha", "Dubalfalia", "Gangpur", "Ghodmal", "Godhabari", "Jamalia", "Kandha", "Kansaria", "Kantasvel", "Kavdej", "Kelia", "Khambhla(Vansda)", "Khata Ambha", "Kurelia", "Lakhawadi", "Limzar", "Mahuvas", "Mankunia", "Manpur", "Molaamba", "Moti Valzar", "Motibhamti", "Navanagar", "Navtad", "Palgabhan", "Pipalkhed", "Pratapnagarr", "Raibor", "Ranifalia", "Ravania", "Rupvel", "Sara", "Sindhai", "Singad", "Umarkui", "Unai", "Upsal", "Vanarasi", "Vansda", "Zari(Vansda)"]
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
