import { Component, OnInit } from '@angular/core';
import { OrderDetails } from '../models/OrderDetails';
import { ActivatedRoute, Router } from '@angular/router';
import { FooditemService } from '../fooditem.service';
import { FoodItems } from '../models/FoodItems';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent implements OnInit {
  trackpercentage:any='';
  orderId:Number;
  orderDate:any;
  order:any;
  orderid:number;
  iId:number;
  user:any={};
 
  public fooditem:any={};
  orderDetails:any;
  quantityx:number=1;
  msg:any="";
  constructor(private route:ActivatedRoute,private router: Router, private service: FooditemService)
   {

    
   }
  trackTheOrder(){
   // this.trackpercentage=this.service.getOrderStatus(this.iId).subscribe(data=>this.trackpercentage=data);
    


   if(this.trackpercentage=='Rejected'){
    document.getElementById("step0").className="active"
  }
  else if(this.trackpercentage=='Order Cancelled'){
        document.getElementById("step0").className="active"
        document.getElementById("step1").className="active"
      }
      else if(this.trackpercentage=='Requested'){
        document.getElementById("step0").className="active"
        document.getElementById("step1").className="active"
        document.getElementById("step2").className="active"
      }
      else if(this.trackpercentage=='Accepted'){
          document.getElementById("step0").className="active"
          document.getElementById("step1").className="active"
          document.getElementById("step2").className="active"
          document.getElementById("step3").className="active"

  

      }
      else if(this.trackpercentage=='Out for Delivery'){
        document.getElementById("step0").className="active"
        document.getElementById("step1").className="active"
        document.getElementById("step2").className="active"
        document.getElementById("step3").className="active"

        document.getElementById("step4").className="active"

      }
      else if(this.trackpercentage=='Delivered'){
        document.getElementById("step0").className="active"
        document.getElementById("step1").className="active"
        document.getElementById("step2").className="active"
        document.getElementById("step3").className="active"
        document.getElementById("step4").className="active"
        document.getElementById("step5").className="active"

      }
  
  }

  


  ngOnInit(): any{
     this.iId=this.route.snapshot.params['iId'];
     console.log(this.iId);
    // console.log(this.orderId);
     this.order=this.service.getOrderById(this.iId).subscribe(data=>{this.order=data
    this.trackpercentage=this.order.orderStatus;
    console.log(this.trackpercentage);
    this.trackTheOrder();
     });
     
    
    

    
  }

}
