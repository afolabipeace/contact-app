import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public formBuilder:FormBuilder, public router: Router, public contactService:ContactService) { }

  public userForm = this.formBuilder.group({
    full_name: [''],
    phone_no: [''],
    email: [''],
    address: [''],
    password: ['']
})

  public usersArray:any = [];
  public message = '';
  ngOnInit(): void {
  this.usersArray = this.contactService.getUsers();
  if(this.contactService.getUsers()){
    this.usersArray = this.contactService.getUsers();
  }else{
    this.usersArray = [];
  }
}

  signUp (){
    //console.log(this.userForm.value);
    // let full_name = this.userForm.value['full_name']
    // console.log(full_name)
    let checkExist = this.usersArray.findIndex((contact:any)=> contact.email == this.userForm.value['email']);
    console.log(checkExist);
    if (checkExist == -1) {
      this.usersArray.push(this.userForm.value);
    localStorage.setItem("userDetails",JSON.stringify(this.usersArray));
    alert('Sigup Successfully')
    localStorage.setItem("contactUser", JSON.stringify(this.userForm.value));
    this.router.navigate(['/contact-app']);
    }else{
      this.message = 'This Email has already exist. Please signup '
    }
    
  }

}
