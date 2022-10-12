import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatBottomSheet } from '@angular/material/bottom-sheet'
import { BottomsheetComponent } from '../bottomsheet/bottomsheet.component';
import { ApiService } from '../services/api.service';
// import {BottomsheetComponent} from '../bottomsheet/bottomsheet.component'
@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  constructor(public snackbar: MatSnackBar, public bottomSheet: MatBottomSheet, public apiService: ApiService) { }
 public todo_name='';
 public todo_desc = '';
  // public duration :any = "5000"
  ngOnInit(): void {
    this.openSnackBar();
  }

  openSnackBar(){
    this.snackbar.open('hello', 'Close',{
      duration: 5000
    })
  }

  openBottomSheet(){
    this.bottomSheet.open(BottomsheetComponent,{
      data:{message: "Are you sure you want to delete this"}
    })
  }

  addTodo(){
    let todoObj = {todo_name: this.todo_name, todo_desc:this.todo_desc}
    this.apiService.addTodo(todoObj).subscribe(data =>{
      console.log(data);
    })
  }

}
