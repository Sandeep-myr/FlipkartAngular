import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcartComponent } from './ViewcartComponent';

describe('ViewcartComponent', () => {
  let component: ViewcartComponent;
  let fixture: ComponentFixture<ViewcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewcartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
