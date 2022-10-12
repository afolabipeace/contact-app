import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public itemDetails = new BehaviorSubject({});
  public contactDetails = new BehaviorSubject({});

  constructor() { }

  public getUsers (){
    return JSON.parse(localStorage['userDetails'])
  }
  public getContact (){
    return JSON.parse(localStorage['contacts']);
  }
}
