import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.css']
})
export class ContactAppComponent implements OnInit {

  constructor() { }
  public full_name = "";
  public email = "";
  public phone_number = "";
  public address = "";
  public relationship = "";
  public contact_array: any = [];
  public message ='';
  public id = '';
  public searchContact = '';

  ngOnInit(): void {
    this.contact_array = JSON.parse(localStorage.getItem('contacts')!);
    if (!this.contact_array) {
      this.contact_array= [];
    }
  }


  createContact () {
    let contactObj = {
      full_name: this.full_name,
      email: this.email,
      phone_number: this.phone_number,
      address: this.address,
      relationship: this.relationship

    }
    console.log(this.contact_array)
    this.contact_array.push(contactObj)
    localStorage.setItem('contacts', JSON.stringify(this.contact_array))
    this.message = 'Contact Added Successfully'
  }

  
  edit(id:any, contact:any) {
    this.full_name = contact.full_name;
    this.email = contact.email;
    this.id = id;
  }
  
  update () {
    this.contact_array.map((contact:any,index:any)=>{
      if(index == this.id){
        contact.full_name = this.full_name;
        contact.email = this.email;
      }
    })
    localStorage.setItem('contacts', JSON.stringify(this.contact_array))
  }
  delete (id:any) {
    
  }
}