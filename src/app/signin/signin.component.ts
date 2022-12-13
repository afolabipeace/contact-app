import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
// import { FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public contactService : ContactService, public router: Router) { }

  public email = ''
  public password = ''
  public usersArray:any = [];
  ngOnInit(): void {
   
  }

  signIn (){
     this.usersArray = this.contactService.getUsers();
    let users = this.usersArray.find((user:any)=>user.email == this.email && user.password == this.password)
    if(users){
      localStorage.setItem('contactUser', JSON.stringify(users));
      this.router.navigate(['/contact'])
    }else{
      this.router.navigate(['/signup'])
    }
  }


}
