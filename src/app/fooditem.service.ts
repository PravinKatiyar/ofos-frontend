import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from, Observable } from 'rxjs';
import{OrderDetails} from 'src/app/models/OrderDetails'
//import{FoodItems} from './'

@Injectable({
  providedIn: 'root'
})
export class FooditemService {

  constructor(private http:HttpClient) {}

   getItem(itemId:number){
    return this.http.get("http://localhost:8082/fooditems/"+itemId);
   }
   fetchFoodItemFromRemote(){
    return this.http.get("http://localhost:8082/fooditems");
   }
   

   fetchFoodItemByRestaurant(restId:any){
    console.log("fetchFoodItemByRestaurant");
    return this.http.get("http://localhost:8082/restaurant/"+restId+"/fooditems");
   }

   fetchFoodItemByRestaurantavailablefoodItems(restId:any){
    console.log("fetchFoodItemByRestaurantavailablefoodItems");
    return this.http.get("http://localhost:8082/restaurant/"+restId+"/fooditemsavailable");
   }

   deleteItem(itemId: number):any{
    return this.http.delete("http://localhost:8082/delete/"+itemId);
   }

   updateItem(itemId: number,value:any):Observable<Object>{
   return this.http.put("http://localhost:8082/update/"+itemId,value);
   }

   addItem(restaurantId:number,foodItem:Object):Observable<Object>{
    return this.http.post("http://localhost:8082/restaurantId/"+restaurantId+"/addfoodItems",foodItem);
  }

  addOrder(itemQuantity:any,userId:any, itemId:any): Observable<OrderDetails>
  {
    let url = "http://localhost:8082/addOrder/" +itemQuantity+"/"+ userId +"/product/"+ itemId;
    return this.http.post<OrderDetails>(url,{});
  

  }

  getOrderById(orderId:Number)
  {
    return this.http.get("http://localhost:8082/orderDetails/"+orderId);
  }


  getOrderStatus(orderId:any): Observable<any>
  {

    let url = "http://localhost:8082/searchOrder/"+ orderId;
    let result: Observable<any> = this.http.get<string>(url);
    return result;
  }

}
