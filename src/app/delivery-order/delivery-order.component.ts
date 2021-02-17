import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { OrderDetails } from '../models/OrderDetails';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-delivery-order',
  templateUrl: './delivery-order.component.html',
  styleUrls: ['./delivery-order.component.css']
})
export class DeliveryOrderComponent implements OnInit {
  orderDetails: OrderDetails;
  serviceList: any;
  service: AdminServiceService;
  order: OrderDetails;
  msg:string='';
  addedBooking: any;
  custId: String;
  serviceId:Number;
  bookingId:String;
  isDeleted:String;
  orderId:Number;

  constructor(service:AdminServiceService, private _router: Router) {
    console.log("Inside View my booking");
    this._router = _router;
    this.service = service;
    this.viewAllBookings();
    
  }


  public viewAllBookings() {
    let observable: Observable<OrderDetails> = this.service.viewAllBookings();
    observable.subscribe(order => {
      this.orderDetails = order;
      //this.serviceList = this.bookingDetail.serviceList;
      console.log(JSON.stringify(this.orderDetails));
      // this.productList=JSON.stringify(this.cartDetail);
      //console.log("inside success callback =" + this.cartDetail);

    }, err => this.msg = err.error);
  }

  acceptOrder(orderId:Number){

    this.orderId=orderId;
    console.log(this.orderId);
    if (confirm("Are You Sure That Order Was Delivered!!")) {
      let observable: Observable<Number> = this.service.deliveredOrder(this.orderId);
      observable.subscribe(order => {
        this.viewAllBookings();
      }, err => {this.msg = err.error.message;
      this.viewAllBookings();});
    }
  }
  

  ngOnInit(): void {
  }

}
