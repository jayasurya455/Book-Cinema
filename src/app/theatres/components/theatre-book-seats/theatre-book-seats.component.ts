import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_PATH } from 'src/app/Main/constants/constants';
import { Movie, Theatre } from 'src/app/shared/models/details';
import { CinemaService } from 'src/app/shared/services/cinema.service';

@Component({
  selector: 'app-theatre-book-seats',
  templateUrl: './theatre-book-seats.component.html',
  styleUrls: ['./theatre-book-seats.component.scss']
})
export class TheatreBookSeatsComponent implements OnInit {
    movie: Movie | undefined;
    showTime: String = "";
    theatre: Theatre | undefined;
    activeDate: Date = new Date();
    jonors: String[] | undefined;
    showButton: boolean = false;


  constructor(private cinemaService: CinemaService, private router: Router) { }

  ngOnInit(): void {
    this.cinemaService.getBookSeatsDetails().subscribe((data) => {
        if(data){
            this.movie = data.movie;
            this.jonors = this.movie?.tags?.split(',');
            this.showTime = data.showTime;
            this.theatre = data.theatre;
        }
    });
    this.cinemaService.getActiveDate().subscribe((data) => {
        if(data){
            this.activeDate = data.activeDate;
        }
    });
  }

  navigateToTheatres() {
    this.router.navigate([this.router.url.replace(APP_PATH.bookSeats,"")]);
  }

  updateShowButton(event: any) {
    this.showButton = event.showBookButton;
  }

}
