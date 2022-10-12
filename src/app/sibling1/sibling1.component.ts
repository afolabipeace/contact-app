import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  constructor(public contactService: ContactService) { }

  public itemArray = [
    {item: "Rice", price: "3000", status: "Availble"},
    {item: "Beans", price: "4000", status: "Availble"},
    {item: "yam", price: "6000", status: "Not-Availble"},
  ]
  
  ngOnInit(): void {
  }

  sendItem(item:any){
    this.contactService.itemDetails.next(item)
  }
}
