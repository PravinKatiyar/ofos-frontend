import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  //Checking If user is loggedIn and change status accordingly
  private subject=new Subject<any>();
  isLoggedIn(){
    if(localStorage.getItem('currentUser')){
      this.subject.next({status:true});
    }else{
      this.subject.next({status:false});

    }
  }

clearStatus(){
  this.subject.next();
}

getStatus():Observable<any>{
  return this.subject.asObservable();
}

  constructor() { }
}
