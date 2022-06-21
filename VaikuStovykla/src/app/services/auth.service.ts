import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  public user:User|null=null;

  private readonly key="AIzaSyBz1Zu6fq-3GCjvE5IeEguN24qZMY7rzuU";
  private readonly url="https://identitytoolkit.googleapis.com/v1/accounts";
  private successLoginFunc=(response:User)=>{
    this.user=response;
    localStorage.setItem("VaikuStovyklaUser", JSON.stringify(this.user));
  }

  constructor(private http:HttpClient) { }

  public register(email:string, password:string){
    return this.http.post<User>(this.url+":signUp?key="+this.key, {
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(tap(this.successLoginFunc));
  }

  public login(email:string, password:string){
    return this.http.post<User>(this.url+":signInWithPassword?key="+this.key, {
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(tap(this.successLoginFunc));
  }

  public autologin(){
    let data=localStorage.getItem("VaikuStovyklaUser");
    if (data!=null) {
      this.user=JSON.parse(data);
    }
  }

}