import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantforuserComponent } from './restaurantforuser.component';

describe('RestaurantforuserComponent', () => {
  let component: RestaurantforuserComponent;
  let fixture: ComponentFixture<RestaurantforuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantforuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantforuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
