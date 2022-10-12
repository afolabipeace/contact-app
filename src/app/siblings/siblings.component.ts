import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-siblings',
  templateUrl: './siblings.component.html',
  styleUrls: ['./siblings.component.css']
})
export class SiblingsComponent implements OnInit {

  constructor( public apiService: ApiService) { }
  public contactDetails:any={};

  ngOnInit(): void {
    this.getItemDetails();
  }
  getItemDetails() {
    this.apiService.contactDetails.subscribe(contact =>{
      this.contactDetails = contact;
    })
  }
}
