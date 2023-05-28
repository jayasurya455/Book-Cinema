import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreLandingComponent } from './theatre-landing.component';

describe('TheatreLandingComponent', () => {
  let component: TheatreLandingComponent;
  let fixture: ComponentFixture<TheatreLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheatreLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheatreLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
