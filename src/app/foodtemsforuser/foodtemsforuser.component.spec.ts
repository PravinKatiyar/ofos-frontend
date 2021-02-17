import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodtemsforuserComponent } from './foodtemsforuser.component';

describe('FoodtemsforuserComponent', () => {
  let component: FoodtemsforuserComponent;
  let fixture: ComponentFixture<FoodtemsforuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodtemsforuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodtemsforuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
