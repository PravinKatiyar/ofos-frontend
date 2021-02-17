import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAuthService } from '../login-auth.service';
import { MenuServiceService } from '../menu-service.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  loginlink: boolean = true;

  public currentstatus:any;

  CustomerLogin: boolean = true;
  //for login menu
  constructor(private _menu: MenuServiceService,private authService: LoginAuthService
    ,private router:Router) {
    this._menu.loginlink.subscribe(res => {
      this.loginlink = res
    }
    )
    this.currentstatus=this.authService.getStatus().subscribe(
      currentstatus=>{
        this.currentstatus= currentstatus;
      }
    )
  }

  logout(){
    localStorage.removeItem('currentuser');
    this.router.navigate(['']);
  }
  ngOnInit(): void {
  }
}
