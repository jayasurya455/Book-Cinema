import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_PATH } from 'src/app/Main/constants/constants';
import { CinemaService } from '../../services/cinema.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public page: string = '';
  public movies: string = APP_PATH.movies;
  public theatres: string = APP_PATH.theatres;
  public ngUnsubscribe = new Subject();

  constructor(private cinemaService: CinemaService, private route: Router) {}

  ngOnInit(): void {
    this.cinemaService.getPageName().pipe(takeUntil(this.ngUnsubscribe)).subscribe((page) => {
      this.page = page;
    });
  }

  public navigateToPage() {
    if (this.page.toLocaleLowerCase() == this.movies) {
      this.route.navigate([this.theatres + '/' + APP_PATH.all]);
      this.page = this.theatres;
    } else {
      this.route.navigate([this.movies]);
      this.page = this.movies;
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
  }
}
