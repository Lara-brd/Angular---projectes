import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signinInfo:Auth[]=[];
  user = {
    name:'',
    ok:false
  }
  private user$ = new Subject<any>();
  constructor() {}

  getSigninInf(){
    this.signinInfo = JSON.parse(localStorage.getItem('signin')!);
    return this.signinInfo
  }


  addUser(user:any){
    this.user = user;
    this.user$.next(user);
  }

  getUser():Observable<any>{
    return this.user$.asObservable();
  }

  printUser(){
    console.log(this.user);
  }





}
