import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../../services/cinema.service';

@Component({
  selector: 'app-dates-available',
  templateUrl: './dates-available.component.html',
  styleUrls: ['./dates-available.component.scss'],
})
export class DatesAvailableComponent implements OnInit {
  public numberOfDates: number = 5;
  public currentDate: Date = new Date();
  public availableDates: Date[] = [];
  public activeDate: Date = new Date();
  constructor(private cinemaService: CinemaService) {}

  ngOnInit(): void {
    for (let i = 0; i < this.numberOfDates; i++) {
      const date = new Date();
      this.availableDates.push(
        new Date(date.setDate(this.currentDate.getDate() + i))
      );
    }
  }

  setActiveDate(activeDate: Date) {
    this.activeDate = activeDate;
    this.cinemaService.updateActiveDate(this.activeDate);
  }
}
