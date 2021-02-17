import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FooditemService } from '../fooditem.service';
import { foodItems } from '../foodItems';

@Component({
  selector: 'app-update-fooditem',
  templateUrl: './update-fooditem.component.html',
  styleUrls: ['./update-fooditem.component.css']
})
export class UpdateFooditemComponent implements OnInit {
  foodItem: any;
  itemId:number;
  fooditems:any;

  constructor(private route:ActivatedRoute,private router: Router, private service: FooditemService) { }

  ngOnInit() {
    this.service.fetchFoodItemFromRemote().subscribe(data=>this.fooditems=data);
    this.foodItem=new foodItems();
    this.itemId=this.route.snapshot.params['itemId'];

    this.service.getItem(this.itemId)
    .subscribe(data=>this.foodItem=data);
  }
  update(){
    this.service.updateItem(this.itemId,this.foodItem)
    .subscribe(data=>console.log(data));
    this.foodItem=new foodItems();
    this.goToList();
  }

  onSubmit(){
    this.update();
  }

  goToList(){
    alert("Food item updated successfully");
    this.router.navigate(['Update-Restaurant']);
  }
}
