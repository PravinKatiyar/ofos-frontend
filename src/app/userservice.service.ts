import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  rechargetheWallet(userid: number, newbal: number) {
    throw new Error('Method not implemented.');
  }
   constructor(private _http: HttpClient) {}

  public signUp(user: any): Observable<any> {
  const headers=new HttpHeaders({'Access-Control-Allow-Origin':'*'});
    //making HTTP POST request
    return this._http.post<any>("http://localhost:8082/registration", user,{headers:headers});
  }

public signIn(user: any): Observable<any> {
    const headers=new HttpHeaders({'Access-Control-Allow-Origin':'*'});
      //making HTTP POST request
      return this._http.post<any>("http://localhost:8082/login", user,{headers:headers});
    }

public getUser(token:any):Observable<any>{
  const headers=new HttpHeaders({'Authorization':'Bearer '+token});
  return this._http.get("http://localhost:8082/userprofile",{headers:headers});
}

public getAdminUser(token:any):Observable<any>{
  const headers=new HttpHeaders({'Authorization':'Bearer '+token});
  return this._http.get("http://localhost:8082/adminprofile",{headers:headers});
}

public rechargeWallet(userid:any,newbal:any):Observable<string>
    {
      
      const headers=new HttpHeaders({'Authorization':'Bearer '});

      return this._http.put<any>('http://localhost:8082/user/'+userid+'/walletrecharge/'+newbal,{headers:headers});
    }



}
