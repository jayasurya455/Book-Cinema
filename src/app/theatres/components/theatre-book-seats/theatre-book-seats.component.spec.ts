import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreBookSeatsComponent } from './theatre-book-seats.component';

describe('TheatreBookSeatsComponent', () => {
  let component: TheatreBookSeatsComponent;
  let fixture: ComponentFixture<TheatreBookSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheatreBookSeatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheatreBookSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
