import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { OrderDetails } from '../models/OrderDetails';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-all-order',
  templateUrl: './view-all-order.component.html',
  styleUrls: ['./view-all-order.component.css']
})
export class ViewAllOrderComponent implements OnInit {

  orderDetails: any;
  serviceList: any;
  service: AdminServiceService;
  order: OrderDetails;
  msg: any='';
  addedBooking: any;
  custId: String;
  serviceId:Number;
  bookingId:String;
  isDeleted:String;
  orderId:Number;
  page:number=1;
  totalRecords:number;
  nameSearch:string='';

  constructor(service:AdminServiceService, private _router: Router) {
    console.log("Inside View my booking");
    this._router = _router;
    this.service = service;
    this.viewAllBookings();
    
  }





  public viewAllBookings():any {
    this.service.viewAllBookings().subscribe(order => {
      this.orderDetails = order;
     // this.totalRecords=this.orderDetails.length;
      console.log(this.totalRecords);
      console.log(JSON.stringify(this.orderDetails));

    }, err => this.msg = err.error.message);
  }

  public acceptOrder(orderId:Number)
  {
    this.orderId=orderId;
    console.log(this.orderId);
    if (confirm("Are You Sure Want To Accept the Order!!")) {
      let observable: Observable<Number> = this.service.acceptOrder(this.orderId);
      observable.subscribe(order => {
        //this.serviceList = this.bookingDetail.serviceList;
        this.viewAllBookings();

      }, err => {this.msg = err.error.message;
      this.viewAllBookings();});
    }
  }

    public rejectOrder(orderId:Number)
  {
    this.orderId=orderId;
    console.log(this.orderId);
    if (confirm("Are You Sure Want To Reject the Order!!")) {
      let observable: Observable<Number> = this.service.rejectOrder(this.orderId);
      observable.subscribe(order => {
        //this.serviceList = this.bookingDetail.serviceList;
        this.viewAllBookings();

      }, err => {this.msg = err.error.message;
      this.viewAllBookings();});
    }
  }

     public orderOutForDelivery(orderId:Number){
      this.orderId=orderId;
      console.log(this.orderId);
      if (confirm("Are You Sure Want To make order out for Delivery!!!")) {
        let observable: Observable<Number> = this.service.orderOutForDelivery(this.orderId);
        observable.subscribe(order => {
        this.viewAllBookings();
  
        }, err => {this.msg = err.error.message;
        this.viewAllBookings();});
      }
  }

  


  ngOnInit(): void {
  }

}
