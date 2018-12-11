import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselheaderComponent } from './carouselheader.component';

describe('CarouselheaderComponent', () => {
  let component: CarouselheaderComponent;
  let fixture: ComponentFixture<CarouselheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
