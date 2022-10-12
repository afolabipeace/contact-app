import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public contactDetails = new BehaviorSubject({});


  constructor(public httpClient: HttpClient ) { }
  public getGithubUsers (){
    return this.httpClient.get('https://api.github.com/users')
  }
  public getUserPrf (login:any){
    return this.httpClient.get(`https://api.github.com/users/${login}`)
  }

  public getContact (){
    return JSON.parse(localStorage['contacts']);
  }
  public addTodo (obj:any){
    return this.httpClient.post<any>("http://127.0.0.1:8000/api/todo/create", obj)
  }
}
