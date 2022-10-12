import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor( public apiService: ApiService) { }
  // public contact_array :any = [];
  public detailsArray:any = [];
  // public full_name = "";
  // public email = "";
  // public phone_number = "";
  // public address = "";
  // public relationship = "";
  // public index ="";

  ngOnInit(): void {
    this.detailsArray = this.apiService.getContact()
    // if (!this.contact_array) {
    //   this.contact_array= [];
    // }
  }
  viewDetails(contact:any) {
    this.apiService.contactDetails.next(contact)
  }

}
