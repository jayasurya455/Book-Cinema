import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { APP_PATH } from 'src/app/Main/constants/constants';
import { Details, Movie, Theatre } from 'src/app/shared/models/details';
import { CinemaService } from 'src/app/shared/services/cinema.service';

@Component({
  selector: 'app-theatre-landing',
  templateUrl: './theatre-landing.component.html',
  styleUrls: ['./theatre-landing.component.scss'],
})
export class TheatreLandingComponent implements OnInit, OnDestroy {
  public userMail: string = 'sample@gmail.com';
  public theatres: Theatre[] = [];
  public pageName: string = APP_PATH.theatres;
  public movieName: string | null;
  public movie: Movie | undefined;
  public ngUnsubscribe = new Subject();
  public searchText: string = '';

  constructor(
    private cinemaService: CinemaService,
    private activatedRoute: ActivatedRoute
  ) {
    this.movieName = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.cinemaService.getAllDetails(this.userMail).pipe(takeUntil(this.ngUnsubscribe)).subscribe({
      next: (detailsData) => {
        if (this.movieName != 'all') {
          this.movie = detailsData.movies?.find(
            (obj) => obj.movie_name === this.movieName
          );
          this.theatres = detailsData.theatre?.filter(
            (obj) =>
              obj.show1_movie === this.movieName ||
              obj.show2_movie === this.movieName ||
              obj.show3_movie === this.movieName ||
              obj.show4_movie === this.movieName
          );
        } else {
          this.theatres = detailsData.theatre;
        }
      },
      error: (e) => {
        console.log(e);
      },
    });

    this.cinemaService.getSearchText().pipe(takeUntil(this.ngUnsubscribe)).subscribe(searchText => {
        this.searchText = searchText;
    });

    this.cinemaService.setPageName(this.pageName);
  }

  ngOnDestroy(): void {
      this.ngUnsubscribe.next(null);
      this.ngUnsubscribe.complete();
  }
}
