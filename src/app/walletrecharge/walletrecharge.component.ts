import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAuthService } from '../login-auth.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-walletrecharge',
  templateUrl: './walletrecharge.component.html',
  styleUrls: ['./walletrecharge.component.css']
})
export class WalletrechargeComponent implements OnInit {
  public loginuser:any={};
  public user:any={ };
  public userid:any;
  public currentwalletBalance:any;
  public newbal:any;
  
  constructor(private authService: LoginAuthService,private userService: UserserviceService,
    private router :Router) {
    this.authService.isLoggedIn();
    this.loginuser=JSON.parse(localStorage.getItem('currentUser'));
   }

   public rechargetheWallet(userid:number,newbal:number):any
  {
   console.log(newbal);
   console.log(userid);
   
    this.userService.rechargeWallet(userid,newbal).subscribe(data=>{
    alert("wallet recharged successfully!!")
    this.router.navigate(['/userdashboard']);
    },   
    error => {    
      alert("wallet recharged successfully!!");
      this.router.navigate(['/userdashboard']);
}       );      
}


  ngOnInit() {
    this.userService.getUser(this.loginuser.token).subscribe(user=>{
      this.user=user;
      this.userid=JSON.parse(sessionStorage.getItem('userdata')).id;
      this.currentwalletBalance=JSON.parse(sessionStorage.getItem('userdata')).walletBalance;
      console.log(JSON.parse(sessionStorage.getItem('userdata')));
    })
  }}
  





