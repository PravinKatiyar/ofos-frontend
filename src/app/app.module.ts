import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserserviceService } from './userservice.service';
import { AuthGuard } from './auth.guards';
import { WalletrechargeComponent } from './walletrecharge/walletrecharge.component';
import { ViewAllOrderComponent } from './view-all-order/view-all-order.component';
import { ViewMyOrdersComponent } from './view-my-orders/view-my-orders.component';
import { OrderComponent } from './order/order.component';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { ViewRestaurantsComponent } from './view-restaurants/view-restaurants.component';
import { AddFooditemComponent } from './add-fooditem/add-fooditem.component';
import { FooditemListComponent } from './fooditem-list/fooditem-list.component';
import { UpdateFooditemComponent } from './update-fooditem/update-fooditem.component';
import { RestaurantforuserComponent } from './restaurantforuser/restaurantforuser.component';
import { FoodtemsforuserComponent } from './foodtemsforuser/foodtemsforuser.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { DeliveryOrderComponent } from './delivery-order/delivery-order.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchfilterPipe } from './searchfilter.pipe';
import { ItemSearchPipe } from './item-search.pipe'



@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    MainpageComponent,
    LoginComponent,
    SignupComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    WalletrechargeComponent,
    ViewAllOrderComponent,
    ViewMyOrdersComponent,
    OrderComponent,
    CreateRestaurantComponent,
    UpdateRestaurantComponent,
    ViewRestaurantsComponent,
    AddFooditemComponent,
    FooditemListComponent,
    UpdateFooditemComponent,
    RestaurantforuserComponent,
    FoodtemsforuserComponent,
    TrackOrderComponent,
    DeliveryOrderComponent,
    SearchfilterPipe,
    ItemSearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule

  ],
  providers: [UserserviceService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
