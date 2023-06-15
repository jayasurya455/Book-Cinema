import { Component, OnInit } from '@angular/core';
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


  constructor(private cinemaService: CinemaService) { }

  ngOnInit(): void {
    this.cinemaService.getBookSeatsDetails().subscribe((data) => {
        if(data){
            this.movie = data.movie;
            this.showTime = data.showTime;
            this.theatre = data.theatre;
        }
    });
  }

}
