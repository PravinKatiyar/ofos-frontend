import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FooditemService } from '../fooditem.service';
import { FoodItems } from '../models/FoodItems';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  iId:number;
  user:any={};
  public fooditem:any={};
  orderDetails:any;
  quantityx:number=1;
  msg:any="";

  constructor(private route:ActivatedRoute,private router: Router, private service: FooditemService) { }


  orderFoodItembyUser(itemQuantity:any,userid:number,itemId:number){
    console.log(itemQuantity);
    console.log(userid);
    console.log(itemId);

    this.orderDetails=this.service.
    addOrder(itemQuantity,userid,itemId).
    subscribe(data=>
      {
        if(data){this.orderDetails=data
          alert("Your Order has been placed!!😁")
          this.router.navigate(['/userdashboard']);

        }}

      ,
      error=>{
        this.msg=error.error.message;
      });


    


  }

  ngOnInit(): void {
    console.log("Order pages opened!!");
    this.user=JSON.parse(sessionStorage.getItem('userdata'));
    this.iId=this.route.snapshot.params['iId'];
    this.fooditem=this.service.getItem(this.iId).subscribe(data=>this.fooditem=data);
    console.log(this.fooditem);
  
   




  }

}
