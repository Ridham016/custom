import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-searchbar',
  templateUrl: './custom-searchbar.component.html',
  styleUrls: ['./custom-searchbar.component.scss'],
})
export class CustomSearchbarComponent  implements OnInit {

  public data = ["Parujan", "Achhavani", "Agasi", "Alipore", "Amadhara", "Ambach(Chikhli)", "Bahej", "Balvada", "Bamanvel", "Bodvank", "Chapaldhara", "Chari", "Chasa", "Chikhli", "Debarpada", "Degam", "Dhamdhuma", "Dholumber  (Chikhli)", "Digendranagar", "Donja", "Fadvel", "Gauri", "Ghej", "Ghodvani", "Gholar", "Godthalbo", "Harangam", "Jamanpada", "Jogvad", "Kakadvel", "Kakadveri", "Kaliari", "Kalvach", "Kanbhai", "Kangvai", "Khambhda", "Kharoli", "Khergam", "Khudvel", "Khundh", "Kukeri", "Majigam", "Maliadhara", "Mandavkhadak", "Manekpore(Chikhli)", "Minkachha", "Mogravadi", "Nandhai", "Naranpore", "Nogama", "Ond", "Panaj", "Panikhadak", "Patibo", "Pipalgabhan", "Rankuva", "Ranverikalla", "Ranverikhurd", "Rethvania", "Rumla", "Ruzvani", "Sadadvel", "Sadakpore", "Samroli", "Saraiya", "Sarvani", "Siyada", "Soldhara", "Sukhabari", "Surkhai", "Suthvad", "Talavchora", "Tankal", "Tejlav", "Thala", "Toranvera", "Vad", "Vandervela", "Vankal (Chikhli)", "Vanzana", "Vav", "Velanpore", "Zari(Chikhli)", "Ajarai", "Amalsad", "Ambheta", "Ancheli", "Antalia", "Bhatfalia", "Bhatha", "Bigri", "Bilimora", "Bilimora RS", "Chapar", "Devdha", "Devsar", "Dhamdachha", "Dhanori(Gandevi)", "Dholai Falia", "Duwada", "Endhal", "Gadat", "Gandeva", "Gandevi", "Ichhapore", "Kachholi", "Kalamtha", "Kesli", "Khakhvada", "Khaparia B0", "Khaparvada", "Kharel", "Khergam(Gandevi)", "Kolva", "Kotha", "Lusvada", "Machhia Vasan", "Manekpore(Gadat)", "Masa", "Mendhar", "Mohanpur", "Movasa Falia", "Nandarkha", "Pati(Gandevi)", "Salej", "Sonvadi", "Sugar Factory", "Taliarabo", "Torangam", "Undach Luhar  Falia", "Undach Vania Falia", "Vaghabari", "Vaghrej", "Valoti", "Vasan(Gandevi)", "Vegam", "Aat", "Abrama", "Arak Sisodra", "Asna", "Avada Falia", "Bhinar", "Bodali", "Bori Falia", "Borsi", "Chijgam", "Chokhad", "Dabhel", "Dambher", "Dandi", "Danti", "Delvada Vadoli", "Dhaman", "Dipla Falia", "Eru Ac", "Eru", "Hansapore", "Jalalpore", "Kadoli", "Kalakachha", "Kalthan", "Kanera", "Karadi", "Kharsad", "Kothmadi", "Krishanapur", "Kuched", "Machhad", "Magob Bhatha", "Mandir", "Manekpore Tankoli", "Mangrol", "Maroli", "Maroli Bazar", "Matvad", "Mirzapore", "Motikaarod", "Motikakrad", "Onjal", "Onjal Machhivad", "Panar", "Pethan", "Ponsra", "Samapur", "Sandalpore", "Sarav", "Simalgam", "Simlak", "Sultanpur", "Tavdi", "Umbharat", "Vedchha", "Vesma", "Chhinam", "Adada", "Amadpore", "Ambada", "Amli Kasba", "Astagam", "Bhattai", "Chandravasansupa", "Chhapra", "Chovisi", "Dabhlai", "Gurukulsupa", "Italva", "Jamalpore", "Junathana", "Kabilpore", "Kaliawadi", "Kasbapar", "Khadsupa", "Khadsupa Boarding", "Khergam (Ugat)", "Kumbhar Falia", "Kurel", "Mahudi", "Malesar", "Mogar", "Moldhara", "Munsad", "Nagdhara", "Navsari", "Padgha", "Parthan", "Pera", "Pinsad", "Sadlav", "Sagra", "Sarpore Pardi", "Satem", "Sisodra", "Supakurel", "Tarsadi", "Toli", "Ugat", "Vejalpore", "Viraval", "Ambabari", "Ambapani", "Bartad", "Bhinar", "Boriach", "Charanvada", "Chondha", "Chorvani", "Dharampuri", "Dholumber", "Doldha", "Dubalfalia", "Gangpur", "Ghodmal", "Godhabari", "Jamalia", "Kandha", "Kansaria", "Kantasvel", "Kavdej", "Kelia", "Khambhla(Vansda)", "Khata Ambha", "Kurelia", "Lakhawadi", "Limzar", "Mahuvas", "Mankunia", "Manpur", "Molaamba", "Moti Valzar", "Motibhamti", "Navanagar", "Navtad", "Palgabhan", "Pipalkhed", "Pratapnagarr", "Raibor", "Ranifalia", "Ravania", "Rupvel", "Sara", "Sindhai", "Singad", "Umarkui", "Unai", "Upsal", "Vanarasi", "Vansda", "Zari(Vansda)"]
  ;
  public list_item=this.data.map(name=>({
    name,isChecked:false
  }));

  results=[...this.list_item];

  constructor() { }

  ngOnInit() {}

  handleChange(ev:any){
    const searchTerm = ev.detail.value.toLowerCase();
    this.results = this.list_item.filter(item => { const matchesSearch = item.name.toLowerCase().includes(searchTerm); return matchesSearch});
  }

  toogleChecked(item:any,index:any){
    console.log(item)
    console.log(index)
    this.list_item[index]['isChecked']=item.isChecked;
    console.log(this.results)
  }
  selectAll(ev:any){
    const changed=ev.detail.checked;
    console.log(changed)
    this.list_item=this.data.map(name=>({
      name,isChecked:changed
    }));
    console.log(this.list_item);
    this.results=[...this.list_item];
  }
}
