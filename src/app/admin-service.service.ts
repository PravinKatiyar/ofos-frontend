import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderDetails } from './models/OrderDetails';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private httpService: HttpClient) { 
    this.httpService=httpService;
  }
  client: HttpClient;

  viewAllBookings(): Observable<OrderDetails> {
    let url = "http://localhost:8082/allOrders";
    let result: Observable<OrderDetails> = this.httpService.get<OrderDetails>(url);
    return result;
  }

  acceptOrder(orderId:Number): Observable<any>{
    let url= "http://localhost:8082/acceptOrder/"+ orderId;
    let result : Observable<any> = this.httpService.put(<any>(url),{responseType: 'json'});
    return result;
  }

  rejectOrder(orderId:Number): Observable<any>{
    let url= "http://localhost:8082/rejctedOrder/"+ orderId;
    let result : Observable<any> = this.httpService.put(<any>(url),{responseType: 'json'});
    return result;
  }

  orderOutForDelivery(orderId:Number): Observable<any>{
    let url= "http://localhost:8082/orderOutForDelivery/"+ orderId;
    let result : Observable<any> = this.httpService.put(<any>(url),{responseType: 'json'});
    return result;
  }

  cancelOrder(orderId:Number): Observable<any>
  {
    let url= "http://localhost:8082/cancelOrder/"+ orderId;
    let result : Observable<any> = this.httpService.put(<any>(url),{responseType: 'json'});
    return result;
  }

  viewMyOrder(userId:any): Observable<OrderDetails> {
    let url = "http://localhost:8082/getAllOrderOfCustomer/"+ userId;
    let result: Observable<OrderDetails> = this.httpService.get<OrderDetails>(url);
    return result;
  }

  deliveredOrder(orderId:Number): Observable<any>{
    let url= "http://localhost:8082/deliveredOrder/"+ orderId;
    let result : Observable<any> = this.httpService.put(<any>(url),{responseType: 'json'});
    return result;
  }
 
 



}
