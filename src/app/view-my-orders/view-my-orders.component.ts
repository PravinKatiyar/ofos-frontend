import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { OrderDetails } from '../models/OrderDetails';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-my-orders',
  templateUrl: './view-my-orders.component.html',
  styleUrls: ['./view-my-orders.component.css']
})
export class ViewMyOrdersComponent implements OnInit {
  orderDetails: any;
  serviceList: any;
  service: AdminServiceService;
  orderId:Number;
  order: any;
  msg: any="";
  addedBooking: any;
  userid:any;
  custId: String;
  serviceId:Number;
  bookingId:String;
  isDeleted:String;
  page:number=1;
  totalRecords:number;
  nameSearch:string='';
  

  constructor(service:AdminServiceService, private _router: Router) {
    console.log("Inside View my booking");
    this._router = _router;
    this.service = service;
    this.viewMyOrders();
  }

  public viewMyOrders(){
    this.userid=JSON.parse(sessionStorage.getItem('userdata')).id;
    let observable: Observable<OrderDetails> = this.service.viewMyOrder(this.userid);
    observable.subscribe(order => {
    this.orderDetails = order;
    console.log(JSON.stringify(this.orderDetails));
    this.totalRecords=this.orderDetails.length;
    console.log(this.totalRecords);
    
    }, err => this.msg = err.error);
  }

  cancelBooking(orderId: Number) {
    this.orderId=orderId;
   // this.orderId=JSON.parse(sessionStorage.getItem('orderDetails')).id;
    console.log(this.orderId);
    if (confirm("Your order will be cancelled and Amount will be refunded, Do you want to continue?")) {
      let observable: Observable<Number> = this.service.cancelOrder(orderId);
      observable.subscribe(order => {
        this.viewMyOrders();

      }, error => {this.msg = error.error.message;
      this.viewMyOrders();});
    
    
    }
    }

   

  ngOnInit(): any {

  }
  trackorder(iId:any): any{
    console.log(iId);
    this._router.navigate(['/trackorder',iId]);
  }

}
