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
  // public contacts: any = [];
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
    this.phone_number = contact.phone_no;
    this.address = contact.address;
    this.relationship = contact.relationship;
    this.id = id;
  }
  
  update () {
    this.contact_array.map((contact:any,index:any)=>{
      if(index == this.id){
        contact.full_name = this.full_name;
        contact.email = this.email;
        contact.phone_no  = this.phone_number;
        contact.address= this.address ;
        contact.relationship = this.relationship;
      }
    })
    localStorage.setItem('contacts', JSON.stringify(this.contact_array))
  }
  delete (id:any) {
    // if (this.contact_array[this.id-1].contact[id].status===true) {
    //   alert('you have purchase this unpurchase to delete')
    // }else{
    //   let check = confirm('are you sure you wants to delete this item')
    //   if (check == true) {
    //     let filtered = this.budget_array[this.id-1].items.filter((obj:any, index:any)=>(index!=id))
    //     this.budget_array[this.id-1].items = filtered
    //     console.log(filtered)
    //     localStorage.setItem('budget_array',JSON.stringify(this.budget_array))
    //   }
    // }




    let filteredArray = this.contact_array.filter((contact:any, index:number)=> index!=id);
    this.contact_array = filteredArray 
    console.log(filteredArray);
  //  localStorage.setItem('contacts',JSON.stringify(this.contact_array))
  localStorage.setItem('contacts', JSON.stringify(this.contact_array))
  }
}