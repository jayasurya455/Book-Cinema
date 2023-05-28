import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { APP_PATH } from 'src/app/Main/constants/constants';
import { Details, Movie, Theatre } from 'src/app/shared/models/details';
import { CinemaService } from 'src/app/shared/services/cinema.service';
import { Store, select } from '@ngrx/store';
import { getDetailsData } from 'src/app/Store/details.selector';
import { getAllDetails } from 'src/app/Store/details.actions';

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
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {
    this.movieName = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.store.dispatch(getAllDetails({userName: this.userMail}));

    this.store.pipe(select(getDetailsData)).subscribe((data) => {
      if (this.movieName != 'all' && data) {
        this.movie = data?.movies?.find(
          (obj) => obj.movie_name === this.movieName
        );
        this.theatres = data?.theatre?.filter(
          (obj) =>
            obj.show1_movie === this.movieName ||
            obj.show2_movie === this.movieName ||
            obj.show3_movie === this.movieName ||
            obj.show4_movie === this.movieName
        );
      } else if (data) {
        this.theatres = data.theatre;
      }
    });

    this.cinemaService
      .getSearchText()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((searchText) => {
        this.searchText = searchText;
      });

    this.cinemaService.setPageName(this.pageName);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
  }
}
