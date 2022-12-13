import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor() { }

    public contact_array:any = [];
    public full_name = "";
    public email = "";
    public phone_no = "";
    public relationship = "";
    public address = "";
    public id = '';

  ngOnInit(): void {
    this.contact_array = JSON.parse(localStorage.getItem('contacts')!);
  }

  edit(id:any, contact:any) {
    this.full_name = contact.full_name;
    this.email = contact.email;
    this.phone_no = contact.phone_no;
    this.address = contact.address;
    this.relationship = contact.relationship;
    this.id = id;
  }
  
  update () {
    this.contact_array.map((contact:any,index:any)=>{
      if(index == this.id){
        contact.full_name = this.full_name;
        contact.email = this.email;
       contact.phone_no  = this.phone_no;
        contact.address= this.address ;
        contact.relationship = this.relationship;
      }
    })
    localStorage.setItem('contacts', JSON.stringify(this.contact_array))
  }
  delete (id:any) {
    let filteredArray = this.contact_array.filter((contact:any, index:number)=> index!=id);
   console.log(filteredArray);
   this.contact_array = filteredArray 
  }

}
