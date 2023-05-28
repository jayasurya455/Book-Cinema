import { Component, OnDestroy, OnInit } from '@angular/core';
import { CinemaService } from '../../../shared/services/cinema.service';
import { Details, Movie, Theatre } from '../../../shared/models/details';
import { Router } from '@angular/router';
import { APP_PATH } from 'src/app/Main/constants/constants';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, OnDestroy {
  public userMail: string = 'sample@gmail.com';
  public movies: Movie[] = [];
  public pageName: string = APP_PATH.movies;
  public ngUnsubscribe = new Subject();
  public searchText: string = '';

  constructor(private cinemaService: CinemaService, private route: Router) {}

  ngOnInit(): void {
    this.cinemaService
      .getAllDetails(this.userMail)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (data) => {
          this.movies = data.movies;
        },
        error: (e) => {
          console.error(e);
        },
      });

    this.cinemaService
      .getSearchText()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((searchText) => {
        this.searchText = searchText;
      });

    this.cinemaService.setPageName(this.pageName);
  }

  public navigateToTheatres(movieName: string | undefined) {
    this.route.navigate([
      this.route.url.replace('movies', 'theatres/' + movieName),
    ]);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
  }
}
